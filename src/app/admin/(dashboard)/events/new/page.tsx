"use client";

import { useActionState } from "react";
import Link from "next/link";
import { createEventAction } from "./actions";

/**
 * 管理画面イベント作成ページ
 */
export default function AdminEventNewPage() {
    const [state, formAction, isPending] = useActionState(
        async (_prevState: { error?: string } | null, formData: FormData) => {
            return await createEventAction(formData);
        },
        null
    );

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-200">
                    イベント作成
                </h1>
                <Link
                    href="/admin/events"
                    className="btn btn-ghost btn-sm text-gray-300"
                >
                    戻る
                </Link>
            </div>

            {state?.error && (
                <div className="alert alert-error text-sm">
                    {state.error}
                </div>
            )}

            <form
                action={formAction}
                className="bg-base-100 rounded-box shadow-md p-6 space-y-4"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            タイトル *
                        </legend>
                        <input
                            type="text"
                            name="title"
                            required
                            className="input input-bordered w-full"
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            URL *
                        </legend>
                        <input
                            type="url"
                            name="url"
                            required
                            className="input input-bordered w-full"
                        />
                    </fieldset>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            画像URL
                        </legend>
                        <input
                            type="url"
                            name="image_url"
                            className="input input-bordered w-full"
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            開催日時
                        </legend>
                        <input
                            type="datetime-local"
                            name="started_at"
                            className="input input-bordered w-full"
                        />
                    </fieldset>
                </div>

                <div className="divider my-0">主催者情報</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            主催者名 *
                        </legend>
                        <input
                            type="text"
                            name="organizer_name"
                            required
                            className="input input-bordered w-full"
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            主催者URL
                        </legend>
                        <input
                            type="url"
                            name="organizer_url"
                            className="input input-bordered w-full"
                        />
                    </fieldset>
                </div>

                <div className="divider my-0">ソース情報</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            ソース
                        </legend>
                        <select
                            name="source"
                            defaultValue="other"
                            className="select select-bordered w-full"
                        >
                            <option value="connpass">connpass</option>
                            <option value="doorkeeper">
                                doorkeeper
                            </option>
                            <option value="other">other</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            ソースイベントID
                        </legend>
                        <input
                            type="text"
                            name="source_event_id"
                            className="input input-bordered w-full"
                        />
                    </fieldset>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                    <Link
                        href="/admin/events"
                        className="btn btn-ghost"
                    >
                        キャンセル
                    </Link>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="btn btn-neutral"
                    >
                        {isPending ? (
                            <span className="loading loading-spinner loading-sm" />
                        ) : (
                            "作成"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
