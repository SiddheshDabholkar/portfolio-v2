import type { NextApiRequest, NextApiResponse } from "next";
import { getClientIp } from "@supercharge/request-ip";
import { handleCreateMessage, supabase } from "@/utils/supabase";
import { FormatResponse } from "@/utils/response";
import { RESPONSE_MESSAGES } from "@/constant/messages";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { question } = req.body;
    const ipAddress = getClientIp(req) || "unknown";

    const { error, count, data, status, statusText } = await supabase
      .from("user")
      .insert([
        {
          firstQuestion: question,
          ip: ipAddress,
        },
      ])
      .select();

    const isDuplicate = status === 409 && statusText === "Conflict";
    let userDetails = null;

    if (isDuplicate) {
      const { data: existingData, error: fetchError } = await supabase
        .from("user")
        .select("*")
        .eq("ip", ipAddress)
        .limit(1);
      if (!fetchError) {
        userDetails = existingData;
      }
    } else {
      userDetails = data;
    }

    const firstUser = userDetails && userDetails[0];

    if (firstUser) {
      const messageDetail = await handleCreateMessage({
        question,
        userId: firstUser.id,
      });
      return res.status(200).json(
        FormatResponse({
          data: {
            userDetails: firstUser,
            message: messageDetail,
          },
          isError: false,
          message: RESPONSE_MESSAGES.USER_CREATION_SUCCESS,
        })
      );
    } else {
      return res.status(500).json(
        FormatResponse({
          data: null,
          isError: true,
          message: RESPONSE_MESSAGES.USER_CREATION_FAILED,
        })
      );
    }
  } catch (error) {
    console.error("Something went wrong in api/create due to", error);
    res.status(500).json(
      FormatResponse({
        data: null,
        isError: true,
        message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
      })
    );
  }
}
