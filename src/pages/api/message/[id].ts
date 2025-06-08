import { systemPromtContent } from "@/constant/chat";
import { RESPONSE_MESSAGES, SSE } from "@/constant/messages";
import { sse } from "@/utils/sse";
import { supabase } from "@/utils/supabase";
import { GoogleGenAI } from "@google/genai";
import type { NextApiRequest, NextApiResponse } from "next";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

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
    const { id } = req.query;

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

    const systemPrompt = {
      role: "model",
      content: systemPromtContent,
    };

    const chat = ai.chats.create({
      model: "gemini-1.5-flash",
      history: [systemPrompt],
    });

    const { answer, question, userId } = messageDetail;

    const result = await chat.sendMessageStream({
      message: question,
    });

    const completeText = [];

    for await (const chunk of result) {
      const text = chunk.text;
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
