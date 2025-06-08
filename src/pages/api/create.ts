import type { NextApiRequest, NextApiResponse } from "next";
import { getClientIp } from "@supercharge/request-ip";
import { supabase } from "@/utils/supabase";
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

    if (!question || typeof question !== "string") {
      res.status(400).json({ error: "Invalid or missing question" });
      return;
    }

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
    console.log({
      error,
      count,
      data,
      status,
      statusText,
      isDuplicate,
    });

    if (isDuplicate) {
      const { data: existingData, error: fetchError } = await supabase
        .from("user")
        .select("*")
        .eq("ip", ipAddress)
        .limit(1);

      console.log({
        existingData,
        fetchError,
      });

      if (fetchError) {
        console.error("Error fetching existing data:", fetchError);
        return res.status(500).json(
          FormatResponse({
            data: null,
            isError: true,
            message: RESPONSE_MESSAGES.USER_CREATION_FAILED,
          })
        );
      } else {
        return res.status(200).json(
          FormatResponse({
            data: existingData[0],
            isError: false,
            message: RESPONSE_MESSAGES.USER_CREATION_SUCCESS,
          })
        );
      }
    }

    if (!error) {
      return res.status(200).json(
        FormatResponse({
          data: data[0],
          isError: false,
          message: RESPONSE_MESSAGES.USER_CREATION_SUCCESS,
        })
      );
    } else {
      console.error("Supabase error:", error);
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
