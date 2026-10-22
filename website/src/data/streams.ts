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
  /** YouTube の動画URL（?si= などのトラッキング引数は付けない）。ショートは /shorts/ID 形式 */
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
  {
    id: "shorts",
    no: "ACT-05",
    name: "ショート",
    en: "SHORTS",
    description: "配信や歌の見どころを短くまとめたショート動画。",
    detail:
      "配信や歌ってみたの見どころを1分以内にまとめたショート動画。気軽に見られる切り抜きや小ネタを公開します。",
  },
  // 「ちょっと役に立つ話」(旧ACT-05) は雑談内で扱うためジャンルからは除外
];

/** 配信アーカイブ（新しいものを先頭に） */
export const streamArchives: StreamArchive[] = [
  {
    genre: "talk",
    date: "2026.10.21",
    title: "「コラボ雑談」かるあくんと一緒に焼肉食べながら話すよ～！！【水隅かるあ】",
    url: "https://www.youtube.com/live/VLps0A-77Tg",
  },
  {
    genre: "talk",
    date: "2026.10.15",
    title: "「トークデッキ雑談」何を聞かれるかわからない！？カードに任せてゆるっとおしゃべり！",
    url: "https://www.youtube.com/live/zFyHOh_n-8k",
  },
  {
    genre: "shorts",
    date: "2026.10.12",
    title: "『ray』歌ってみました",
    url: "https://www.youtube.com/shorts/kPK3WWr7S_o",
  },
  {
    genre: "music",
    date: "2026.10.11",
    title: "「突発歌枠」突発で歌枠（ちょっとだけ）",
    url: "https://www.youtube.com/live/4hUWeZGEPig",
  },
  {
    genre: "dev",
    date: "2026.10.07",
    title: "「けもケ17」けもケアプリ大反省会！マシュマロも読むよ🐯🌈",
    url: "https://www.youtube.com/live/0VzzJSENhRs",
  },
  {
    genre: "music",
    date: "2026.09.26",
    title: "「歌枠」コハク歌枠やります",
    url: "https://www.youtube.com/live/SRKAAJyfXIQ",
  },
  {
    genre: "talk",
    date: "2026.09.22",
    title: "「記念雑談」初めての歌ってみた、どうだった？",
    url: "https://www.youtube.com/live/EdxMu1OCFKU",
  },
  {
    genre: "music",
    date: "2026.09.22",
    title: "「歌ってみた」ray / BUMP OF CHICKEN",
    url: "https://www.youtube.com/watch?v=cd2d8yBhyPQ",
  },
  {
    genre: "talk",
    date: "2026.09.17",
    title: "「雑談」京都いってきた！旅行の思い出いっぱい話す🐯✨",
    url: "https://www.youtube.com/live/ifv-uyW-GFQ",
  },
  {
    genre: "talk",
    date: "2026.09.13",
    title: "「雑談」月見バーガー食べ食べ雑談🍔🌕 お昼ごはん一緒に食べよ～！",
    url: "https://www.youtube.com/live/8kw3n39ZPrU",
  },
  {
    genre: "game",
    date: "2026.09.12",
    title: "「漢字でGO！」漢字力、見せつけます。",
    url: "https://www.youtube.com/live/aaqj6V34-ww",
  },
  {
    genre: "dev",
    date: "2026.09.08",
    title: "「使い方解説」けもケット17 お買い物支援アプリを実際に使ってみよう！",
    url: "https://www.youtube.com/live/HkQ7Cb_kRUc",
  },
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

/** YouTube URL（/live/ID, /shorts/ID, watch?v=ID）から動画IDを取り出す */
export const videoIdOf = (url: string): string | undefined => {
  const m = url.match(/(?:\/live\/|\/shorts\/|[?&]v=)([A-Za-z0-9_-]{11})/);
  return m?.[1];
};

/**
 * サムネイルURL（320×180）。動画IDから決まるので API キー不要。
 * ショートも16:9（両脇ぼかし）で返るため同じ扱いでよい。
 */
export const thumbnailOf = (url: string): string | undefined => {
  const id = videoIdOf(url);
  return id ? `https://i.ytimg.com/vi/${id}/mqdefault.jpg` : undefined;
};

/** ジャンルに属するアーカイブ（新しい順） */
export const archivesOf = (genreId: string): StreamArchive[] =>
  streamArchives.filter((a) => a.genre === genreId);
