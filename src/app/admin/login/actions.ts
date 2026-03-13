"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

/**
 * メールアドレスとパスワードでログインを行う
 */
export async function login(formData: FormData) {
    const supabase = await createClient();

    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        return { error: "メールアドレスまたはパスワードが正しくありません" };
    }

    revalidatePath("/admin", "layout");
    redirect("/admin/events");
}

/**
 * ログアウトを行い、ログインページへリダイレクトする
 */
export async function logout() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    revalidatePath("/", "layout");
    redirect("/admin/login");
}
