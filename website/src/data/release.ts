/**
 * 公開スケジュール設定（2段階）
 *
 * TEASER_AT_ISO: 全身画像の公開日時。トップの立ち絵が黒抜きシルエット→本画像に
 *                切り替わる（Xでの全身公開と同タイミング）
 * REVEAL_AT_ISO: 資料室の設定資料の解禁日時（初配信で説明しながら紹介）
 * どちらも時刻になるとページを開いたままでも自動で解除される。
 *
 * 動作プレビュー: URL に ?preview=teaser で全身公開後、
 * ?preview=reveal で資料解禁後の表示を確認できる
 * （クライアント側ゲートのため、あくまで見た目の先行確認用）。
 */
export const TEASER_AT_ISO = "2026-08-29T19:50:00+09:00";
export const TEASER_LABEL = "2026.08.29 SAT 19:50";

export const REVEAL_AT_ISO = "2026-09-05T21:00:00+09:00";
export const REVEAL_LABEL = "2026.09.05 SAT 21:00";

/**
 * OGP画像（SNSでURLを共有したときのプレビュー画像）。
 * クローラーは静的メタタグを読むため日時ゲートでは切り替わらない。
 * 9/5 初配信後に "/assets/ogp/ogp-debut.png" へ差し替えて再デプロイすること。
 * 画像の再生成は: node tools/make-ogp.mjs
 */
export const OG_IMAGE = "/assets/ogp/ogp-teaser.png";
