/**
 * 配信ジャンル定義 — トップの活動カードと /streams ページで共有
 *
 * 運用:
 *  - 配信が終わったら streamArchives に1件追加する（新しいものを先頭に）。
 *    該当ジャンルのカードが「準備中」→「公開中」になり、アーカイブ一覧に並ぶ。
 *  - ジャンルごとの YouTube 再生リストができたら playlistUrl を設定する。
 *    再生リストへのリンクがアーカイブ一覧の下に表示される。
 */

export interface StreamGenre {
  /** アンカーID（/streams#id で使用） */
  id: string;
  /** 管理番号（ACT-01 のように表示） */
  no: string;
  name: string;
  en: string;
  /** トップの活動カードに表示する短い説明 */
  description: string;
  /** /streams ページに表示する詳しい説明 */
  detail: string;
  /** YouTube 再生リストURL。設定するとリンクが有効になる */
  playlistUrl?: string;
}

/** 配信アーカイブ1本分 */
export interface StreamArchive {
  /** 所属ジャンル（StreamGenre.id） */
  genre: string;
  /** 配信日（表示用。例: "2026.09.05"） */
  date: string;
  title: string;
  /** YouTube の動画URL（?si= などのトラッキング引数は付けない） */
  url: string;
}

export const streamGenres: StreamGenre[] = [
  {
    id: "talk",
    no: "ACT-01",
    name: "雑談",
    en: "TALK",
    description: "日常のことや気になることをのんびり話します。",
    detail:
      "日常のことや気になる話題をのんびり話す雑談配信。コメントでの交流も中心になる予定です。",
  },
  {
    id: "game",
    no: "ACT-02",
    name: "ゲーム",
    en: "GAME",
    description: "様々なジャンルのゲームを中心に配信予定。",
    detail:
      "アクションからシミュレーションまで、様々なジャンルのゲーム実況・攻略配信を予定しています。",
  },
  {
    id: "music",
    no: "ACT-03",
    name: "歌・企画",
    en: "MUSIC & EVENTS",
    description: "歌配信や視聴者参加型の企画なども予定。",
    detail:
      "歌配信のほか、視聴者参加型の企画・コラボ企画などを不定期で開催予定です。",
  },
  {
    id: "dev",
    no: "ACT-04",
    name: "自作ツール",
    en: "DEV WORKS",
    description: "自ら制作したツールを紹介・配信します。",
    detail:
      "自作ツールの紹介や、開発の様子をお届けする配信。完成したものは Projects ページで公開します。",
  },
  // 「ちょっと役に立つ話」(旧ACT-05) は雑談内で扱うためジャンルからは除外
];

/** 配信アーカイブ（新しいものを先頭に） */
export const streamArchives: StreamArchive[] = [
  {
    genre: "talk",
    date: "2026.09.06",
    title: "「雑談」初配信振り返り！！",
    url: "https://www.youtube.com/live/PNe7cuz3ysA",
  },
  {
    genre: "talk",
    date: "2026.09.05",
    title: "ついに初配信だ！！",
    url: "https://www.youtube.com/live/WRj4QBicDnc",
  },
];

/** ジャンルに属するアーカイブ（新しい順） */
export const archivesOf = (genreId: string): StreamArchive[] =>
  streamArchives.filter((a) => a.genre === genreId);
