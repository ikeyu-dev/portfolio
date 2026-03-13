-- eventsテーブルの作成
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  image_url TEXT,
  started_at TIMESTAMPTZ,
  organizer_name TEXT NOT NULL,
  organizer_url TEXT,
  source TEXT NOT NULL DEFAULT 'other',
  source_event_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- updated_at自動更新トリガー
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- RLS有効化
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- SELECT: 全ユーザー（anon含む）に許可（公開データ）
CREATE POLICY "events_select_policy" ON events
  FOR SELECT USING (true);

-- INSERT: 認証済みユーザーのみ
CREATE POLICY "events_insert_policy" ON events
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- UPDATE: 認証済みユーザーのみ
CREATE POLICY "events_update_policy" ON events
  FOR UPDATE USING (auth.role() = 'authenticated');

-- DELETE: 認証済みユーザーのみ
CREATE POLICY "events_delete_policy" ON events
  FOR DELETE USING (auth.role() = 'authenticated');
