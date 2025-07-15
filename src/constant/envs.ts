const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;
const GROQ_API_KEY = process.env.GROQ_API_KEY!;
const NEXT_PUBLIC_API_URL = (() => {
  if (typeof window !== "undefined") {
    return `${window.location.origin}/api/`;
  }
  return "";
})();
export {
  GEMINI_API_KEY,
  NEXT_PUBLIC_API_URL,
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  GROQ_API_KEY,
};
