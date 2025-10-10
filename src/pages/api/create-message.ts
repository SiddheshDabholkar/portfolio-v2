import { RESPONSE_MESSAGES } from "@/constant/messages";
import { FormatResponse } from "@/utils/response";
import { handleCreateMessage } from "@/utils/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

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
