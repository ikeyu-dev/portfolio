import Link from "next/link";
import { getEvents } from "@/lib/events";
import { deleteEventAction } from "./actions";

/**
 * 管理画面イベント一覧ページ
 */
export default async function AdminEventsPage() {
    const events = await getEvents();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-200">
                    イベント管理
                </h1>
                <Link
                    href="/admin/events/new"
                    className="btn btn-link btn-sm text-gray-200 no-underline"
                >
                    新規作成
                </Link>
            </div>

            {events.length === 0 ? (
                <div className="card bg-base-100 rounded-box shadow-md">
                    <div className="card-body items-center py-16">
                        <p className="text-base-content/50 text-lg">
                            イベントがありません
                        </p>
                        <Link
                            href="/admin/events/new"
                            className="btn btn-link btn-sm no-underline"
                        >
                            最初のイベントを作成する
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="bg-base-100 rounded-box shadow-md">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>タイトル</th>
                                    <th>開始日</th>
                                    <th>終了日</th>
                                    <th className="text-right">
                                        操作
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map((event) => (
                                    <tr
                                        key={event.id}
                                        className="hover"
                                    >
                                        <td>
                                            <a
                                                href={event.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link link-hover font-medium"
                                            >
                                                {event.title}
                                            </a>
                                        </td>
                                        <td className="whitespace-nowrap">
                                            {event.started_at
                                                ? new Date(
                                                      event.started_at
                                                  ).toLocaleDateString(
                                                      "ja-JP"
                                                  )
                                                : "-"}
                                        </td>
                                        <td className="whitespace-nowrap">
                                            {event.ended_at
                                                ? new Date(
                                                      event.ended_at
                                                  ).toLocaleDateString(
                                                      "ja-JP"
                                                  )
                                                : "-"}
                                        </td>
                                        <td>
                                            <div className="flex justify-end gap-1">
                                                <Link
                                                    href={`/admin/events/${event.id}/edit`}
                                                    className="btn btn-ghost btn-xs"
                                                >
                                                    編集
                                                </Link>
                                                <form
                                                    action={deleteEventAction.bind(
                                                        null,
                                                        event.id
                                                    )}
                                                >
                                                    <button
                                                        type="submit"
                                                        className="btn btn-ghost btn-xs text-error"
                                                    >
                                                        削除
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
