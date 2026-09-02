/**
 * Projects — 月白コハクが制作したアプリ・ツール・ゲーム等の紹介データ
 *
 * /projects（一覧）と /projects/[slug]（詳細）はこのファイルだけを見て生成される。
 * 新しいプロジェクトを載せるときは `projects` 配列に1件追加するだけでよい。
 *
 * ■ 公開制御（status）
 *   draft     … 一覧・詳細ページ・ナビのどこにも出ない。詳細URLはビルドされず 404 になる
 *   published … 一覧に表示され、/projects/<slug> の詳細ページが生成される
 *   ※ 日時による自動公開はしない。公開するときは手動で status を書き換えて再デプロイする
 *
 * ■ 任意項目
 *   値を設定した項目だけ詳細ページに表示される（未設定の項目は見出しごと出ない）。
 *   正式な文章・画像・URLが揃うまでは無理に埋めず、未設定のままにしておくこと。
 *
 * ■ 画像
 *   /public/assets/projects/<slug>/ に置き、"/assets/projects/<slug>/xxx.png" で指定する。
 *   thumbnail は一覧カード用（16:10 推奨）、heroImage は詳細ページ上部用（16:9 推奨）。
 */

export type ProjectStatus = "draft" | "published";

/** カードに表示する進捗バッジ（未設定なら非表示） */
export type ProjectPhase = "live" | "coming" | "dev" | "planned";

export interface ProjectImage {
  /** /public 配下のパス */
  src: string;
  /** 代替テキスト。装飾目的なら空文字 */
  alt: string;
  /** スクリーンショットの下に表示する説明 */
  caption?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectUpdate {
  /** 表示用日付（例: "2026.09.07"） */
  date: string;
  text: string;
}

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface Project {
  /** URL の一部になる識別子（英小文字・数字・ハイフン） */
  slug: string;
  /** 管理番号（PRJ-01 のように表示） */
  no: string;
  title: string;
  /** 英語表記（モノスペースで表示） */
  en: string;
  /** 一覧カード・詳細ページ冒頭・meta description に使う短い説明 */
  shortDescription: string;
  status: ProjectStatus;
  phase?: ProjectPhase;

  /** 一覧カードのサムネイル */
  thumbnail?: ProjectImage;
  /** 詳細ページ上部の画像 */
  heroImage?: ProjectImage;
  /** 詳細ページ見出し下のキャッチコピー */
  tagline?: string;

  /** プロジェクト概要（段落ごとに1要素） */
  description?: string[];
  /** 主な機能 */
  features?: string[];
  screenshots?: ProjectImage[];
  /** 使い方（手順ごとに1要素） */
  usage?: string[];
  /** 対応環境 */
  platforms?: string[];
  /** 注意事項 */
  notes?: string[];

  /** アプリ本体のURL。設定すると「アプリを開く」ボタンが出る */
  appUrl?: string;
  /** ソースコードのURL */
  repositoryUrl?: string;
  /** その他の外部リンク */
  links?: ProjectLink[];

  /** 更新情報（新しいものを先頭に） */
  updates?: ProjectUpdate[];
  /** 制作者表記 */
  credits?: ProjectCredit[];

  /** 表示用日付（例: "2026.09.07"） */
  publishedAt?: string;
  updatedAt?: string;

  /** 詳細ページの meta を個別に上書きしたい場合に設定 */
  seo?: {
    title?: string;
    description?: string;
    /** /public 配下のOGP画像パス（1200×630） */
    ogImage?: string;
  };
}

export const projects: Project[] = [
  {
    // 第1号プロジェクト。初配信後の紹介配信までは draft のまま維持すること。
    // 公開時: status を "published" にし、正式な文章・画像・appUrl を設定してからデプロイする。
    // （旧 Projects ページに候補として記載されていたURL: https://kohaku-tsukishiro.github.io/kemoke17/
    //   正式な公開URLが確定してから appUrl に設定する）
    slug: "kemoket-support",
    no: "PRJ-01",
    title: "けもケ お買い物支援アプリ",
    en: "KEMOKET SUPPORT APP",
    shortDescription:
      "けもケットでのサークル巡回や買い物をサポートするために制作したWebアプリ。",
    status: "draft",
    phase: "coming",
  },
  {
    slug: "recallos",
    no: "PRJ-02",
    title: "RecallOS",
    en: "RECALLOS",
    shortDescription: "開発中のプロジェクト。詳細は続報をお待ちください。",
    status: "published",
    phase: "dev",
  },
  {
    slug: "streaming-tools",
    no: "PRJ-03",
    title: "配信用ツール",
    en: "STREAMING TOOLS",
    shortDescription: "配信をもっと楽しくする自作ツール群。順次公開予定。",
    status: "published",
    phase: "planned",
  },
];

/** 一覧・詳細ページ・ナビが参照する公開済みプロジェクト */
export const publishedProjects: Project[] = projects.filter(
  (p) => p.status === "published",
);

/**
 * ヘッダーナビに「Projects」を出すかどうか。
 * 公開プロジェクトが0件の間は自動的に非表示になる。
 * 常時表示にしたい場合は `= true` に書き換える。
 */
export const SHOW_PROJECTS_NAV: boolean = publishedProjects.length > 0;

export const projectPhaseMeta: Record<ProjectPhase, { label: string; cls: string }> = {
  live: { label: "公開中", cls: "st-live" },
  coming: { label: "COMING SOON", cls: "st-coming" },
  dev: { label: "開発中", cls: "st-dev" },
  planned: { label: "構想中", cls: "st-planned" },
};

/** 詳細ページのURL */
export const projectUrl = (p: Project): string => `/projects/${p.slug}`;
