"use client";

import { useState } from "react";
import Link from "next/link";
import { login } from "./actions";

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setError(null);

        const result = await login(formData);
        if (result?.error) {
            setError(result.error);
        }

        setLoading(false);
    }

    return (
        <>
            <header className="bg-gradient-gray flex justify-between items-center transition-colors duration-300 p-4 pb-10 sticky top-0 z-10">
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-200 transition-colors duration-300">
                        管理画面
                    </span>
                </div>
                <Link
                    href="/"
                    className="btn btn-link btn-sm text-gray-300 no-underline"
                >
                    トップへ戻る
                </Link>
            </header>
            <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
                <div className="card w-full max-w-sm bg-base-100 rounded-box shadow-md">
                    <div className="card-body gap-6">
                        <h2 className="text-2xl font-bold text-center">
                            ログイン
                        </h2>
                        {error && (
                            <div className="alert alert-error text-sm">
                                <span>{error}</span>
                            </div>
                        )}
                        <form
                            action={handleSubmit}
                            className="space-y-4"
                        >
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    メールアドレス
                                </legend>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    パスワード
                                </legend>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </fieldset>
                            <button
                                type="submit"
                                className="btn btn-neutral w-full"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="loading loading-spinner loading-sm" />
                                ) : (
                                    "ログイン"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
