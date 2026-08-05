# Moonlight White Tiger Project — ブランドガイドライン

「月白コハク」を中心とした開発ブランド **Moonlight White Tiger Project** のブランド定義。
公式サイト・Webアプリ・配信用ツールなど、すべてのプロダクトはこのガイドラインに従う。

## ブランドコンセプト

> 技術と創作を発信する近未来ブランド

- 「VTuberのホームページ」ではなく「ブランドの公式プロダクト」として設計する
- キーワード: **月光 / 白虎 / 近未来 / HUD / 高級感 / 清潔感 / 静かな未来感 / 公式資料**
- 参考イメージ: Apple / Nothing / PlayStation / SF HUD / 高級プロダクトサイト
- **避けるもの**: 派手なネオン、過度なサイバー表現、安っぽいアニメーション、グラスモーフィズムの多用、暗い背景に暗い紫文字

## ブランドカラー

ロゴ・公式設定資料から抽出した公式カラー。CSS変数は `website/public/brand/brand.css` に定義。

| 名前 | HEX | CSS変数 | 用途 |
|---|---|---|---|
| 月白 (Moon White) | `#F4FAFC` | `--c-bg` | ベース背景 |
| ティール (Aurora Teal) | `#52D3A8` | `--c-teal` | グラデーション始点 |
| シアン (Lunar Cyan) | `#38C3E2` | `--c-cyan` | HUD装飾・アクセント |
| ブルー (Tiger Blue) | `#2B7CD9` | `--c-blue` | グラデーション終点・リンク |
| ネイビー (Deep Navy) | `#0C2340` | `--c-navy` | 見出し・ロゴ文字色 |
| 琥珀 (Kohaku Amber) | `#D9A248` | `--c-amber` | アクセント（控えめに） |

- ブランドグラデーション: `--grad-brand`（ティール→シアン→ブルー 115deg）。設定資料の背景と同じ流れ
- 小さな文字にシアンを使う場合は可読性確保のため `--c-cyan-text: #0F7FA8` を使う
- 琥珀はキャラクターの三日月模様由来。DEBUT表記・注記・三日月マークなど**ポイント使いのみ**

## ロゴ

原本: `assets/logo/`（Web用最適化版: `website/public/assets/logos/`）

- **メインロゴ** — かな表記＋Tsukisiro Kohaku。三日月・肉球・ゴーグル・▶▶▶ モチーフを含む
- **シンボルロゴ** — 白虎の顔。ファビコン・ヘッダー・フッターで使用
- 改変・変形・再配色は禁止。余白を確保し、視認できるサイズで使用する

## デザインモチーフ（HUD言語）

設定資料のフレームデザインをUIに展開したもの。実装は `brand.css` 参照。

- **白HUDフレーム** — グラデ背景に白枠＋左上コーナーカット（バナーで使用）
- **コーナーブラケット** — カード四隅の `hud-corners`
- **斜めスラッシュバー** — `hud-slash`（▰▰▰▰装飾）
- **シェブロン** — `hud-chevrons`（》》》）
- **回路ライン** — `circuit-cyan` / `circuit-white`（SVGパターン）
- **管理番号** — `NO.01` `REF-01` `PRJ-01` のようなモノスペースのタグ
- **三日月** — ローディング・装飾・区切りに使用

## タイポグラフィ

- 本文: システムフォント（`--font-body`）。游ゴシック / Noto Sans JP系
- HUDラベル・番号・英字装飾: モノスペース（`--font-mono`）＋広めのletter-spacing
- 見出しはネイビー太字＋letter-spacing 0.1em前後

## アニメーション方針

- 控えめに。Fade / Blur / Glow / スクロール出現 / ホバーのみ
- ホバーは「浮き上がり＋淡い発光＋光のスイープ」で統一（`hud-sweep`）
- `prefers-reduced-motion` を必ず尊重する（brand.css がグローバルに抑制）

## 名前表記

- 月白コハク ／ 月白虎珀 ／ Tsukishiro Kohaku ／ つきしろ こはく
- プロジェクト名: **Moonlight White Tiger Project**
- コピーライト: `© Tsukishiro Kohaku`
