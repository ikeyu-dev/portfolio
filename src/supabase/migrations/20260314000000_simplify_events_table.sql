-- 不要なカラムを削除
ALTER TABLE events DROP COLUMN image_url;
ALTER TABLE events DROP COLUMN organizer_name;
ALTER TABLE events DROP COLUMN organizer_url;
ALTER TABLE events DROP COLUMN source;
ALTER TABLE events DROP COLUMN source_event_id;

-- 終了日時カラムを追加（複数日イベント対応）
ALTER TABLE events ADD COLUMN ended_at TIMESTAMPTZ;
