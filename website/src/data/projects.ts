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
  /** 紹介・使い方ページを持つか。URLはプロジェクトslugから生成する */
  hasHowTo?: boolean;
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
    // 2026-09-07 公開。
    slug: "kemoket-support",
    no: "PRJ-01",
    title: "けもケット17 購入サポートアプリ",
    en: "KEMOKET 17 PURCHASE SUPPORT APP",
    shortDescription:
      "けもケット17当日のサークル巡回・購入を支援する、非公式ファンメイドWebアプリ。",
    status: "published",
    phase: "live",
    thumbnail: {
      src: "/assets/projects/kemoket-support/og.png",
      alt: "けもケット17 購入サポートアプリの紹介画像",
    },
    heroImage: {
      src: "/assets/projects/kemoket-support/og.png",
      alt: "アプリアイコンと実際の配置図画面を掲載した、けもケット17 購入サポートアプリの紹介画像",
    },
    tagline: "当日の『次はどこ？』を、スマートフォンひとつで分かりやすく。",
    description: [
      "けもケット17の会場で、行きたいサークル探しから巡回順、購入チェックまでをまとめて支援するWebアプリです。",
      "広い会場で次に向かう場所をすぐ確認でき、買い忘れや巡回中の迷いを減らしたいという思いから制作しました。アカウント登録なしで、当日持っていくスマートフォンから利用できます。",
    ],
    features: [
      "会場配置図に予定と巡回順を重ね、次に行くサークルをすぐ確認",
      "サークル名・代表者名・配置番号から検索し、行く予定や『あとで』へ登録",
      "欲しいもの・価格・個数・メモをまとめられる購入リスト",
      "行く順番の並べ替えと、購入後の『済み』チェック",
      "依頼内容を共有リンクやQRコードで渡せるお使い依頼",
      "ホーム画面への追加と、オンライン中の事前起動による利用支援",
    ],
    screenshots: [
      {
        src: "/assets/projects/kemoket-support/og.png",
        alt: "現在版のけもケット17 購入サポートアプリ配置図画面を掲載した紹介画像",
        caption: "現在版の配置図画面。予定と巡回順を重ねて、当日の移動を確認できます。",
      },
    ],
    platforms: ["iPhone / Safari", "Android / Chrome", "PWA対応"],
    notes: [
      "入力内容は使用中の端末・ブラウザ内に保存され、別端末へ自動同期されません。",
      "当日ホーム画面から使う場合は、先にホーム画面へ追加し、そのアイコンから起動した状態で準備してください。",
      "本ツールは月白コハク制作の非公式ファンメイドツールです。けもケット主催・運営とは関係ありません。",
    ],
    appUrl: "https://kohaku-tsukishiro.github.io/kemoke17/",
    hasHowTo: true,
    credits: [{ role: "制作", name: "月白コハク" }],
    publishedAt: "2026.09.05",
    seo: {
      title: "けもケット17 購入サポートアプリ | 月白コハク",
      description:
        "けもケット17当日のサークル巡回、行く順番、購入リスト、お使い依頼を支援する月白コハク制作の非公式Webアプリ。",
      ogImage: "/assets/projects/kemoket-support/og.png",
    },
  },
  {
    slug: "recallos",
    no: "PRJ-02",
    title: "RecallOS",
    en: "RECALLOS",
    shortDescription: "開発中のプロジェクト。詳細は続報をお待ちください。",
    // 公開できる内容が揃うまで非表示（2026-09-07）
    status: "draft",
    phase: "dev",
  },
  {
    slug: "streaming-tools",
    no: "PRJ-03",
    title: "配信用ツール",
    en: "STREAMING TOOLS",
    shortDescription: "配信をもっと楽しくする自作ツール群。順次公開予定。",
    // 公開できる内容が揃うまで非表示（2026-09-07）
    status: "draft",
    phase: "planned",
  },
];

/** 一覧・詳細ページ・ナビが参照する公開済みプロジェクト */
export const publishedProjects: Project[] = projects.filter(
  (p) => p.status === "published",
);

/**
 * ローカル開発では draft も確認できる。production build は公開済みだけを対象にし、
 * 一覧・詳細・how-to・sitemapへ draft のrouteを生成しない。
 */
export const previewableProjects: Project[] = import.meta.env.DEV
  ? projects
  : publishedProjects;

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

/** 紹介・使い方ページのURL */
export const projectHowToUrl = (p: Project): string => `${projectUrl(p)}/how-to`;
