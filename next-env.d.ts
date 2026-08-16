/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_URL: string;
      NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: string;
    }
  }
}

export {};
