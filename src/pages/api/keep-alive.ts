import { supabase } from "@/utils/supabase";
import { FormatResponse } from "@/utils/response";
import { RESPONSE_MESSAGES } from "@/constant/messages";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  try {
    const { data, error } = await supabase.from("user").select("ip").limit(1);
    return res.status(200).json(
      FormatResponse({
        data: null,
        isError: false,
        message: "Listened",
      })
    );
  } catch (error) {
    console.error("Something went wrong in api/keep-alive due to", error);
    res.status(500).json(
      FormatResponse({
        data: null,
        isError: true,
        message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
      })
    );
  }
}
