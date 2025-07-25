import { RESPONSE_MESSAGES } from "@/constant/messages";
import { FormatResponse } from "@/utils/response";
import { sse } from "@/utils/sse";
import { handleCreateMessage, supabase } from "@/utils/supabase";
import { GoogleGenAI } from "@google/genai";
import type { NextApiRequest, NextApiResponse } from "next";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  try {
    const userid = String(req.headers.userid);
    const { question } = req.body;
    const messageDetail = await handleCreateMessage({
      question,
      userId: userid,
    });
    if (messageDetail) {
      res.status(200).json(
        FormatResponse({
          data: messageDetail,
          isError: false,
          message: RESPONSE_MESSAGES.MESSAGE_CREATION_SUCCESS,
        })
      );
    } else {
      res.status(500).json(
        FormatResponse({
          data: null,
          isError: true,
          message: RESPONSE_MESSAGES.MESSAGE_CREATION_FAILED,
        })
      );
    }
  } catch (error) {
    res.status(500).json(
      FormatResponse({
        data: null,
        isError: true,
        message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
      })
    );
  }
}
