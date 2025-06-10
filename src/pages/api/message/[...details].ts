import { systemPromtContent } from "@/constant/chat";
import { RESPONSE_MESSAGES, SSE } from "@/constant/messages";
import { sse } from "@/utils/sse";
import { supabase } from "@/utils/supabase";
import { GoogleGenAI } from "@google/genai";
import type { NextApiRequest, NextApiResponse } from "next";
import Groq from "groq-sdk";
import { GROQ_API_KEY } from "@/constant/envs";

const groq = new Groq({ apiKey: GROQ_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  try {
    const { details } = req.query;
    const userId = (details && Array.isArray(details) && details[0]) ?? "";
    const id = (details && Array.isArray(details) && details[1]) ?? "";

    const { count } = await supabase
      .from("message")
      .select("id", { count: "exact" })
      .eq("userId", userId);

    console.log("count", count);

    if (count && +count >= 7) {
      sse({
        data: "",
        isError: false,
        message: SSE.LIMIT_EXCEEDED,
        res,
        stopIt: true,
      });
      return;
    }

    const { data, error: fetchError } = await supabase
      .from("message")
      .select("*")
      .eq("id", id)
      .limit(1);

    const messageDetail = data && Array.isArray(data) ? data[0] : null;

    if (!messageDetail) {
      sse({
        data: "",
        isError: false,
        message: RESPONSE_MESSAGES.MESSAGE_DO_NOT_EXISTS,
        res,
        stopIt: true,
      });
      return;
    }
    const { answer, question } = messageDetail;

    const stream = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPromtContent,
        },
        {
          role: "user",
          content: question,
        },
      ],
      model: "llama3-8b-8192",
      temperature: 0.7,
      max_tokens: 1024,
      stream: true,
    });

    const completeText = [];

    for await (const chunk of stream) {
      const text = chunk.choices[0]?.delta?.content || "";
      completeText.push(text);
      if (text) {
        sse({
          data: text,
          isError: false,
          message: "",
          res,
          stopIt: false,
        });
      }
    }

    await supabase
      .from("message")
      .update({ answer: completeText.join("") })
      .match({ id: messageDetail.id });

    sse({
      data: "",
      isError: false,
      message: SSE.COMPLETED,
      res,
      stopIt: true,
    });
  } catch (error) {
    console.error("API error:", error);
    sse({
      data: "",
      isError: true,
      message: SSE.FAILED,
      res,
      stopIt: true,
    });
  }
}
