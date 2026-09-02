# Moonlight White Tiger Project

「月白コハク」を中心とした開発ブランドのモノレポ。
公式サイト・Webアプリ・配信用ツールを **同じブランドのプロダクト群** として管理する。

## リポジトリ構成

```
website/            公式サイト（Astro）— ブランドの母艦・ポータル
  public/brand/     brand.css = 共有Design System（全プロダクトの見た目の基準）
  private-assets/   パスワード保護資料の平文（非公開）
  tools/            暗号化などの運用スクリプト
apps/
  kemoket-app/      けもケット購入サポートWebアプリ（単一HTML+PWA）
                    _working/ は作業ファイル置き場（デプロイ対象外）
assets/             ブランド素材の原本（logo / frames / reference / character）
docs/               brand-guideline.md / design-system.md / roadmap.md
```

## 開発

サイト開発は `website/` で行う:

```
cd website
astro dev --background   # 起動（バックグラウンド）
astro dev stop / status / logs
npm run build
```

## 必ず守ること

- **デザインは docs/brand-guideline.md と docs/design-system.md に従う。**
  新しいUIは brand.css のトークン・コンポーネント（.mwt-* / .hud-* / doc-panel）を使い、
  どのプロダクトでも「月白コハクのブランド」と分かる統一感を保つ
- 近未来・高級感・清潔感。派手なネオン／過度なサイバー表現／安っぽいアニメーションは禁止
- `prefers-reduced-motion`・コントラスト・focus-visible などアクセシビリティを維持
- 公開スケジュールと解禁ゲート（2026-09-05 19:00）の仕組みは docs/roadmap.md と
  `website/src/data/release.ts` を参照。素体資料はパスワード暗号化（website/tools/）
- git push / commit はユーザーの指示があるときのみ

## 素材フォルダの注意

`assets/` 配下の日本語ファイル名は濁点がNFD分解形のものがあり、
PowerShellの文字列一致やGDI+が失敗する。`Get-ChildItem` で実パスを解決するか、
濁点を含まない文字でマッチさせること。

## Astroドキュメント

https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Components](https://docs.astro.build/en/basics/astro-components/)
- [Styling](https://docs.astro.build/en/guides/styling/)
