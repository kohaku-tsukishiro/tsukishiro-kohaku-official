/**
 * 月白コハク 公式設定資料室 — 資料データ
 *
 * 画像の配置:
 * - 設定資料シート:      /assets/reference/          （閲覧用 1800px JPEG）
 * - サムネイル:          /assets/reference/thumbs/   （一覧用 760px JPEG）
 * - ロゴ・ブランド素材:  /assets/logos/              （透過 PNG）
 *
 * 注意: PSD / CLIP / Live2D 原本は公開対象としない。
 */

export type Category = "character" | "brand" | "media";

export interface Material {
  id: string;
  category: Category;
  /** 資料番号（REF-01 のように表示） */
  refNo?: string;
  title: string;
  description: string;
  /** 閲覧用画像パス。未設定なら「準備中」として表示 */
  preview?: string;
  /** 一覧サムネイル。未設定なら preview を使用 */
  thumb?: string;
  /** ダウンロードファイルパス。isDownloadable が true のときのみ使用 */
  download?: string;
  alt: string;
  isDownloadable: boolean;
  /** カラーパレット表示用。設定するとスウォッチを表示 */
  swatches?: { hex: string; name: string; en: string }[];
  /** ロゴなど透過素材をそのままの比率で表示する場合 true */
  contain?: boolean;
  /**
   * パスワード保護。true の場合 preview / thumb / download は
   * AES-GCM 暗号化済み（.enc）のパスを指し、資料室のビューアが復号する。
   * 暗号化は tools/encrypt-protected.mjs で行う。
   */
  protected?: boolean;
}

export interface CategoryMeta {
  num: string;
  en: string;
  ja: string;
  note?: string;
}

export const categoryMeta: Record<Category, CategoryMeta> = {
  character: {
    num: "01",
    en: "Character Reference",
    ja: "キャラクター設定資料",
    note: "三面図・立ち絵・装飾品・動物態の公式設定資料",
  },
  brand: {
    num: "02",
    en: "Brand Assets",
    ja: "ブランド素材",
    note: "公式ロゴ・シンボルロゴ・カラーパレット",
  },
  media: {
    num: "03",
    en: "Media Kit",
    ja: "メディアキット",
    note: "コラボ・紹介用の素材一式（準備中）",
  },
};

export const materials: Material[] = [
  /* ── 01 Character Reference ─────────────────────── */
  {
    id: "ref-turnaround-outfit",
    category: "character",
    refNo: "REF-01",
    title: "三面図［着衣］",
    description: "通常衣装の正面・側面・背面図。チョーカー・チャーム・エンブレム等の詳細付き",
    preview: "/assets/reference/ref-01-turnaround-outfit.jpg",
    thumb: "/assets/reference/thumbs/ref-01-turnaround-outfit.jpg",
    alt: "月白コハク 三面図（着衣）",
    isDownloadable: true,
    download: "/assets/downloads/ref-01-turnaround-outfit.pdf",
  },
  {
    id: "ref-fullbody-jacket",
    category: "character",
    refNo: "REF-02",
    title: "立ち絵［ジャケット］",
    description: "基本色（青色）の立ち絵とカラーバリエーション",
    preview: "/assets/reference/ref-02-fullbody-jacket.jpg",
    thumb: "/assets/reference/thumbs/ref-02-fullbody-jacket.jpg",
    alt: "月白コハク 立ち絵（ジャケット）",
    isDownloadable: true,
    download: "/assets/downloads/ref-02-fullbody-jacket.pdf",
  },
  {
    id: "ref-fullbody-vest",
    category: "character",
    refNo: "REF-03",
    title: "立ち絵［ベスト］",
    description: "ベスト衣装の立ち絵設定資料",
    preview: "/assets/reference/ref-03-fullbody-vest.jpg",
    thumb: "/assets/reference/thumbs/ref-03-fullbody-vest.jpg",
    alt: "月白コハク 立ち絵（ベスト）",
    isDownloadable: true,
    download: "/assets/downloads/ref-03-fullbody-vest.pdf",
  },
  {
    id: "ref-fullbody-tshirt",
    category: "character",
    refNo: "REF-04",
    title: "立ち絵［Tシャツ］",
    description: "Tシャツ衣装の立ち絵設定資料",
    preview: "/assets/reference/ref-04-fullbody-tshirt.jpg",
    thumb: "/assets/reference/thumbs/ref-04-fullbody-tshirt.jpg",
    alt: "月白コハク 立ち絵（Tシャツ）",
    isDownloadable: true,
    download: "/assets/downloads/ref-04-fullbody-tshirt.pdf",
  },
  {
    id: "ref-turnaround-base",
    category: "character",
    refNo: "REF-05",
    title: "三面図［素体］",
    description: "素体の三面図。瞳・掌・足裏・模様の詳細付き（パスワード保護）",
    preview: "/assets/protected/ref-05-turnaround-base.jpg.enc",
    thumb: "/assets/protected/thumbs/ref-05-turnaround-base.jpg.enc",
    alt: "月白コハク 三面図（素体）",
    isDownloadable: true,
    download: "/assets/protected/ref-05-turnaround-base.pdf.enc",
    protected: true,
  },
  {
    id: "ref-fullbody-base",
    category: "character",
    refNo: "REF-06",
    title: "立ち絵［素体］",
    description: "素体の立ち絵設定資料（パスワード保護）",
    preview: "/assets/protected/ref-06-fullbody-base.jpg.enc",
    thumb: "/assets/protected/thumbs/ref-06-fullbody-base.jpg.enc",
    alt: "月白コハク 立ち絵（素体）",
    isDownloadable: true,
    download: "/assets/protected/ref-06-fullbody-base.pdf.enc",
    protected: true,
  },
  {
    id: "ref-accessories-1",
    category: "character",
    refNo: "REF-07",
    title: "装飾品①",
    description: "イヤーカフ＆ピアス・メガネの設定資料",
    preview: "/assets/reference/ref-07-accessories-1.jpg",
    thumb: "/assets/reference/thumbs/ref-07-accessories-1.jpg",
    alt: "月白コハク 装飾品設定資料①",
    isDownloadable: true,
    download: "/assets/downloads/ref-07-accessories-1.pdf",
  },
  {
    id: "ref-accessories-2",
    category: "character",
    refNo: "REF-08",
    title: "装飾品②",
    description: "装飾品の設定資料",
    preview: "/assets/reference/ref-08-accessories-2.jpg",
    thumb: "/assets/reference/thumbs/ref-08-accessories-2.jpg",
    alt: "月白コハク 装飾品設定資料②",
    isDownloadable: true,
    download: "/assets/downloads/ref-08-accessories-2.pdf",
  },
  {
    id: "ref-accessories-3",
    category: "character",
    refNo: "REF-09",
    title: "装飾品③",
    description: "装飾品の設定資料",
    preview: "/assets/reference/ref-09-accessories-3.jpg",
    thumb: "/assets/reference/thumbs/ref-09-accessories-3.jpg",
    alt: "月白コハク 装飾品設定資料③",
    isDownloadable: true,
    download: "/assets/downloads/ref-09-accessories-3.pdf",
  },
  {
    id: "ref-animal-1",
    category: "character",
    refNo: "REF-10",
    title: "立ち絵［動物態］①",
    description: "月の力が強くなると動物になることがある。額に三日月マーク",
    preview: "/assets/reference/ref-10-animal-form-1.jpg",
    thumb: "/assets/reference/thumbs/ref-10-animal-form-1.jpg",
    alt: "月白コハク 動物態立ち絵①",
    isDownloadable: true,
    download: "/assets/downloads/ref-10-animal-form-1.pdf",
  },
  {
    id: "ref-animal-2",
    category: "character",
    refNo: "REF-11",
    title: "立ち絵［動物態］②",
    description: "動物態（白虎）の立ち絵設定資料",
    preview: "/assets/reference/ref-11-animal-form-2.jpg",
    thumb: "/assets/reference/thumbs/ref-11-animal-form-2.jpg",
    alt: "月白コハク 動物態立ち絵②",
    isDownloadable: true,
    download: "/assets/downloads/ref-11-animal-form-2.pdf",
  },

  /* ── 02 Brand Assets ─────────────────────────────── */
  {
    id: "logo-main",
    category: "brand",
    refNo: "BRD-01",
    title: "メインロゴ",
    description: "公式メインロゴ。三日月・肉球・ゴーグルのモチーフを含む",
    preview: "/assets/logos/logo-main.png",
    alt: "月白コハク 公式メインロゴ",
    isDownloadable: false,
    contain: true,
  },
  {
    id: "logo-gradient",
    category: "brand",
    refNo: "BRD-02",
    title: "メインロゴ［グラデーション］",
    description: "ネイビー〜ブルーの単色グラデーション版",
    preview: "/assets/logos/logo-gradient.png",
    alt: "月白コハク メインロゴ（グラデーション版）",
    isDownloadable: false,
    contain: true,
  },
  {
    id: "logo-mono",
    category: "brand",
    refNo: "BRD-03",
    title: "メインロゴ［枠なし］",
    description: "白フチなしのメインロゴ",
    preview: "/assets/logos/logo-mono.png",
    alt: "月白コハク メインロゴ（枠なし版）",
    isDownloadable: false,
    contain: true,
  },
  {
    id: "logo-symbol",
    category: "brand",
    refNo: "BRD-04",
    title: "シンボルロゴ",
    description: "白虎の顔をモチーフにした公式シンボルロゴ",
    preview: "/assets/logos/logo-symbol.png",
    alt: "月白コハク シンボルロゴ",
    isDownloadable: false,
    contain: true,
  },
  {
    id: "brand-colors",
    category: "brand",
    refNo: "BRD-05",
    title: "カラーパレット",
    description: "ロゴ・設定資料から抽出した公式ブランドカラー",
    alt: "月白コハク 公式カラーパレット",
    isDownloadable: false,
    swatches: [
      { hex: "#F4FAFC", name: "月白",     en: "MOON WHITE" },
      { hex: "#52D3A8", name: "ティール", en: "AURORA TEAL" },
      { hex: "#38C3E2", name: "シアン",   en: "LUNAR CYAN" },
      { hex: "#2B7CD9", name: "ブルー",   en: "TIGER BLUE" },
      { hex: "#0C2340", name: "ネイビー", en: "DEEP NAVY" },
      { hex: "#D9A248", name: "琥珀",     en: "KOHAKU AMBER" },
    ],
  },

  /* ── 03 Media Kit ────────────────────────────────── */
  {
    id: "media-profile",
    category: "media",
    title: "コラボ紹介用プロフィール",
    description: "コラボ・配信紹介時に使用するプロフィール文（準備中）",
    alt: "月白コハク コラボ紹介用プロフィール",
    isDownloadable: false,
  },
  {
    id: "media-thumbnail",
    category: "media",
    title: "サムネイル掲載用素材",
    description: "サムネイルやバナーへの掲載に使用できる素材（準備中）",
    alt: "月白コハク サムネイル用素材",
    isDownloadable: false,
  },
  {
    id: "media-guideline",
    category: "media",
    title: "利用ガイドライン",
    description: "素材・画像の利用に関するガイドライン（準備中）",
    alt: "月白コハク 利用ガイドライン",
    isDownloadable: false,
  },
];

/** カテゴリごとに資料を分類して返す */
export function getMaterialsByCategory(category: Category): Material[] {
  return materials.filter((m) => m.category === category);
}

/** プレビュー画像が設定された資料だけ返す（ビューア用） */
export function getPreviewableMaterials(): Material[] {
  return materials.filter((m) => m.preview !== undefined);
}
