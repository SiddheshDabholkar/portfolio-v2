import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/constant/envs";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

type handleCreateMessageProps = {
  question: string;
  userId: string;
};
const handleCreateMessage = async ({
  question,
  userId,
}: handleCreateMessageProps) => {
  const { data } = await supabase
    .from("message")
    .insert([
      {
        question,
        userId,
      },
    ])
    .select();
  const messageDetail = data && Array.isArray(data) ? data[0] : null;
  return messageDetail;
};

export { supabase, handleCreateMessage };
