# Moonlight White Tiger Project — ロードマップ

## スケジュール（2026年）

| 日付 | 予定 |
|---|---|
| **08.29 (土) 19:50** | 全身画像公開（Xで全身を投稿）。トップの立ち絵が黒抜きシルエット→本画像に自動切替（実装済み） |
| **09.05 (土) 21:00** | 月白コハク デビュー（初配信）。資料室の詳細資料は配信で説明しながら紹介し、サイト側も同時刻に自動解禁（実装済み） |
| **09.07〜09.08 頃** | 配信で「けもケット購入サポートアプリ」を紹介 → 公式サイトのProjectsから公開 |
| **09.20 (日)** | けもケット17 開催 |

## 公開前チェックリスト

- [ ] 素体資料のパスワードを変更（`node website/tools/encrypt-protected.mjs 新パスワード`）
- [x] YouTubeチャンネルURLをサイトに設定（2026-08-22 設定済み）
- [x] 本番ホスティングへデプロイ — Cloudflare Pages `tukishiro-kohaku-official` で
      https://tsukishiro-kohaku.com として公開中。GitHub `kohaku-tsukishiro/tsukishiro-kohaku-official`
      の main へ push すると自動デプロイされる
- [x] OGP画像（1200×630）の作成（2026-08-22 生成済み。再生成は `node website/tools/make-ogp.mjs`）
- [x] `website/astro.config.mjs` の `site` を設定（https://tsukishiro-kohaku.com）
- [ ] （9/5 初配信後）`website/src/data/release.ts` の `OG_IMAGE` を `ogp-debut.png` に差し替えて再デプロイ
- [ ] けもケットアプリの公開（`apps/kemoket-app` → 配信サブパスへ）＋ Projectsカードを `status: "live"` に変更
- [ ] （デビュー後）ジャンル別のYouTube再生リストを作成し、`website/src/data/streams.ts` の `playlistUrl` を設定
      （/streams のカードが「準備中」→「公開中」になりリンクが有効化。ナビへの「Streams」追加もこのタイミングで検討）

## プロダクト

| プロダクト | 状態 | 場所 |
|---|---|---|
| 公式サイト | 制作中（デビュー待ち） | `website/` |
| けもケット購入サポート | 完成・公開待ち | `apps/kemoket-app/` |
| RecallOS | 開発中 | （未統合） |
| 配信用ツール | 構想中 | — |

## 今後の構想

- Design System の拡充（フォーム部品・トースト通知など）
- アプリ共通のデプロイパイプライン（website + apps を同一ドメインで配信）
- オープンソースとして公開するツールの選定
