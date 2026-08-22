/**
 * OGP画像生成スクリプト（1200×630）
 *
 * 使い方:  node tools/make-ogp.mjs
 * 出力:    public/assets/ogp/ogp-teaser.png … ロゴ＋黒抜きシルエット（〜9/5）
 *          public/assets/ogp/ogp-debut.png  … ロゴ＋立ち絵本画像（9/5 21:00〜）
 *
 * 切り替えは src/data/release.ts の OG_IMAGE を差し替えて再デプロイ
 * （OGPはクローラーが静的メタタグを読むため、サイト内の日時ゲートでは切替不可）。
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { mkdir } from "node:fs/promises";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const asset = (p) => join(root, "public", "assets", p);
const outDir = join(root, "public", "assets", "ogp");

const W = 1200;
const H = 630;

/* ブランドカラー（brand.css 準拠） */
const TEAL = "#52D3A8";
const CYAN = "#38C3E2";
const BLUE = "#2B7CD9";
const NAVY = "#0C2340";

/** 背景（グラデーション＋回路ライン＋フレーム＋三日月）とテキスト・チップ */
function bgSvg(chipText) {
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${TEAL}"/>
      <stop offset="0.5" stop-color="${CYAN}"/>
      <stop offset="1" stop-color="${BLUE}"/>
    </linearGradient>
    <mask id="crescent">
      <rect width="${W}" height="${H}" fill="#fff"/>
      <circle cx="1035" cy="58" r="118" fill="#000"/>
    </mask>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#brand)"/>

  <!-- 回路ライン -->
  <g stroke="#ffffff" stroke-width="2" fill="none" opacity="0.18">
    <path d="M40 120h190l50 50h150"/>
    <circle cx="440" cy="170" r="4.5"/>
    <path d="M90 560V420l38-38V300"/>
    <circle cx="128" cy="295" r="4.5"/>
    <path d="M1150 300v150l-50 50"/>
    <circle cx="1094" cy="506" r="4.5"/>
    <rect x="35" y="115" width="9" height="9" fill="#ffffff" stroke="none"/>
    <rect x="1145" y="295" width="9" height="9" fill="#ffffff" stroke="none"/>
  </g>

  <!-- 三日月 -->
  <circle cx="1080" cy="100" r="120" fill="rgba(255,255,255,0.75)" mask="url(#crescent)"/>

  <!-- フレーム -->
  <rect x="24" y="24" width="${W - 48}" height="${H - 48}" rx="12"
        fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="3"/>
  <path d="M24 24 h56 l-56 56 Z" fill="rgba(255,255,255,0.9)"/>

  <!-- スラッシュ装飾（右上） -->
  <g fill="rgba(255,255,255,0.85)">
    ${Array.from({ length: 12 }, (_, i) =>
      `<path d="M${820 + i * 26} 52 h12 l-10 18 h-12 Z"/>`
    ).join("")}
  </g>

  <!-- シェブロン（左下） -->
  <g stroke="rgba(255,255,255,0.85)" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    ${Array.from({ length: 5 }, (_, i) =>
      `<path d="M${56 + i * 26} 552 l14 14 -14 14"/>`
    ).join("")}
  </g>

  <!-- テキスト -->
  <text x="84" y="150" font-family="Consolas, monospace" font-size="24"
        letter-spacing="10" fill="#ffffff">TSUKISHIRO KOHAKU</text>
  <text x="84" y="186" font-family="Consolas, monospace" font-size="16"
        letter-spacing="7" fill="rgba(255,255,255,0.85)">OFFICIAL BRAND SITE</text>

  <!-- チップ -->
  <g>
    <rect x="84" y="472" width="${chipText.length * 15 + 56}" height="56" rx="28" fill="rgba(255,255,255,0.94)"/>
    <text x="${84 + 28}" y="508" font-family="Consolas, monospace" font-size="24"
          letter-spacing="3" fill="${NAVY}">${chipText}</text>
  </g>
</svg>`;
}

/** 立ち絵の下端をフェードアウトさせる（サイトのHeroと同じ演出） */
async function figureWithFade(srcPath, height) {
  const buf = await sharp(srcPath).resize({ height }).toBuffer();
  const { width } = await sharp(buf).metadata();
  const fade = Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="f" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0.84" stop-color="#fff"/>
        <stop offset="0.99" stop-color="#fff" stop-opacity="0"/>
      </linearGradient></defs>
      <rect width="100%" height="100%" fill="url(#f)"/>
    </svg>`
  );
  const faded = await sharp(buf)
    .composite([{ input: fade, blend: "dest-in" }])
    .toBuffer();
  return { buf: faded, width };
}

async function build({ figure, chipText, out }) {
  const FIG_H = 566;
  const { buf: fig, width: figW } = await figureWithFade(asset(figure), FIG_H);
  const logo = await sharp(asset("logos/logo-main.png"))
    .resize({ width: 470 })
    .toBuffer();

  await sharp({
    create: { width: W, height: H, channels: 4, background: BLUE },
  })
    .composite([
      { input: Buffer.from(bgSvg(chipText)), top: 0, left: 0 },
      { input: fig, top: H - FIG_H, left: W - figW - 48 },
      { input: logo, top: 218, left: 84 },
    ])
    .png()
    .toFile(join(outDir, out));
  console.log(`✓ ${out}`);
}

await mkdir(outDir, { recursive: true });
await build({
  figure: "character/hero-figure-silhouette.png",
  chipText: "2026.09.05 SAT 21:00 DEBUT",
  out: "ogp-teaser.png",
});
await build({
  figure: "character/hero-figure.png",
  chipText: "2026.09 DEBUT",
  out: "ogp-debut.png",
});
