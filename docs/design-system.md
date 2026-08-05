# Moonlight White Tiger Project — Design System

ブランド共通のデザイントークンとUIコンポーネント集。

- **実体**: `website/public/brand/brand.css`（1ファイル・依存なしのプレーンCSS）
- **読み込み方**: `<link rel="stylesheet" href="/brand/brand.css" />`
  - 公式サイトは `BaseLayout.astro` で読み込み済み
  - `apps/` 配下のアプリも同一ドメインで配信する場合は同じパスで読み込める
    （単体配布する場合はファイルをコピーして同梱する）

## デザイントークン

`:root` のCSS変数。色は [brand-guideline.md](brand-guideline.md) を参照。

| 変数 | 内容 |
|---|---|
| `--c-*` | ブランドカラー一式 |
| `--grad-brand` / `--grad-frame` / `--grad-hairline` | 公式グラデーション |
| `--border-frame` / `--border-dim` | カード枠線 |
| `--radius-card` | カード角丸 (10px) |
| `--space-section` | セクション余白 (112px) |
| `--shadow-panel` / `--shadow-hover` | 通常時／ホバー時の影 |
| `--font-body` / `--font-mono` | フォントスタック |

## レイアウト

| クラス | 用途 |
|---|---|
| `.container` | 中央寄せコンテナ（max 1080px） |
| `.section` / `.section-compact` | セクション余白 |

## コンポーネント

### ボタン（HUDシステムUI）

```html
<a class="mwt-btn mwt-btn--primary" href="#">Primary</a>
<a class="mwt-btn mwt-btn--navy" href="#">Navy</a>
<a class="mwt-btn mwt-btn--secondary" href="#">Secondary</a>
```

角カット＋ホバーで光のスイープ＋境界発光＋浮き上がり。`<button>` にも使用可。

### カード

```html
<div class="doc-panel hud-corners">…</div>   <!-- 資料パネル＋コーナーブラケット -->
<div class="doc-panel hud-sweep">…</div>     <!-- ホバーで上辺に光が走る -->
```

ホバーで持ち上げる場合は `transform: translateY(-4px); box-shadow: var(--shadow-hover);` を付与。

### セクション見出し（資料タイトル形式）

```html
<div class="section-header">
  <span class="sec-no">NO.01</span>
  <div class="sec-titles">
    <h2 class="sec-ja">見出し</h2>
    <p class="sec-en">Section Label</p>
  </div>
  <span class="sec-line" aria-hidden="true"></span>
</div>
```

### タグ / バッジ / チップ

```html
<span class="mwt-tag">REF-01</span>            <!-- 管理番号（グラデ） -->
<span class="mwt-tag mwt-tag--navy">PRJ-01</span>
<span class="mwt-badge mwt-badge--amber">準備中</span>
<span class="mwt-badge mwt-badge--ok">公開中</span>
<span class="mwt-badge mwt-badge--blue">BETA</span>
<span class="mwt-chip">月白虎珀</span>          <!-- グラデ背景上の白ピル -->
```

### インフォメーション

```html
<div class="mwt-info">…お知らせ…</div>          <!-- 破線枠の案内 -->
<p class="mwt-note">…補足ノート…</p>            <!-- 琥珀アクセントの注記 -->
```

### モーダル（`<dialog>`）

```html
<dialog class="mwt-modal">…</dialog>
```

開閉アニメーション・背景ブラー込み。`dialog.showModal()` で使用。

### ローディング / 装飾

```html
<span class="mwt-loading" role="status" aria-label="読み込み中"></span>
<span class="mwt-crescent" aria-hidden="true"></span>  <!-- 琥珀の三日月 -->
```

### HUD装飾ユーティリティ

| クラス | 内容 |
|---|---|
| `.hud-corners` | 四隅ブラケット（::before/::after使用） |
| `.hud-slash` / `.hud-slash--white` | 斜めスラッシュバー |
| `.hud-chevrons` | 》》》（`<i>` を3〜5個入れる） |
| `.hud-sweep` | ホバーで上辺に光。色は `--sweep-color` で変更可 |
| `.circuit-cyan` / `.circuit-white` | 回路ライン背景パターン |

### アニメーション / その他

| クラス | 内容 |
|---|---|
| `.reveal` + `.in-view` | スクロール出現（JS: IntersectionObserverで付与） |
| `.when-sealed` / `.when-revealed` | 公開日時ゲートの表示切替（`<html>.revealed` と併用） |
| `.sr-only` | スクリーンリーダー専用テキスト |

## 注意事項

- Astroのスコープ付き`<style>`から動的挿入DOMを装飾する場合は `:global()` が必要
- brand.css を変更したら公式サイトと各アプリの両方で表示確認すること
- 新コンポーネントは brand.css に追加し、このドキュメントを更新する
