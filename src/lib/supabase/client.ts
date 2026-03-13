import { createBrowserClient } from "@supabase/ssr";

/**
 * ブラウザ環境用のSupabaseクライアントを生成する
 */
export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
}
