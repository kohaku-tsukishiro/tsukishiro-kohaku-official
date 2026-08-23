/**
 * 制作クレジット（資料室に表示）
 *
 * 8/29 19:50 の全身公開（teaser）と同時に資料室へ表示される。
 * 表示制御は reference.astro 側の .when-teased クラスで行う。
 *
 * name / url / image が未設定の間は:
 * - name → tag（ママ／パパ）で表示
 * - url  → リンクなしのカードとして表示
 * - image → 三日月プレースホルダを表示
 *
 * サムネ画像は /public/assets/credits/ に置くこと（正方形推奨・400px程度）。
 */

export interface Credit {
  id: string;
  /** 英語ロール表記（モノスペースで表示） */
  roleEn: string;
  /** 日本語ロール表記 */
  role: string;
  /** ママ／パパ の呼称 */
  tag: string;
  /** お名前。null の間は tag を表示 */
  name: string | null;
  /** XアカウントURL。null の間はリンクなし */
  url: string | null;
  /** 表示用ハンドル（例: "@xxxx"）。null なら非表示 */
  handle: string | null;
  /** サムネ画像パス（/public 配下）。null なら三日月プレースホルダ */
  image: string | null;
}

export const credits: Credit[] = [
  {
    id: "mama",
    roleEn: "CHARACTER DESIGN / ILLUSTRATION",
    role: "キャラクターデザイン・イラスト",
    tag: "ママ",
    name: "なつめ 雪むし",
    url: "https://x.com/yukimushi6",
    handle: "@yukimushi6",
    image: "/assets/credits/mama.jpg",
  },
  {
    id: "papa",
    roleEn: "LIVE2D MODELING",
    role: "モデリング",
    tag: "パパ",
    name: "ふとすけ",
    url: "https://x.com/hutosuke1111",
    handle: "@hutosuke1111",
    image: "/assets/credits/papa.jpg",
  },
];
