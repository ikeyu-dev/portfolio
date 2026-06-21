/** 参加イベント表示に使う型 */
export interface Event {
    id: string;
    title: string;
    url: string;
    started_at: string | null;
    ended_at: string | null;
}
