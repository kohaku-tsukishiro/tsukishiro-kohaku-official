/**
 * 素体資料（REF-05 / REF-06）をパスワードで暗号化して public/assets/protected/ に出力する。
 *
 * 使い方:
 *   node tools/encrypt-protected.mjs <パスワード>
 *
 * - 平文の元ファイルは private-assets/ に置く（このフォルダは公開されない）
 * - パスワードを変更したいときは、新しいパスワードで再実行するだけ
 * - 出力形式: [salt 16B][iv 12B][AES-256-GCM 暗号文+認証タグ]
 *   （閲覧側は資料室ページの JS が Web Crypto で復号する）
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "private-assets");
const OUT = path.join(ROOT, "public", "assets", "protected");

const FILES = [
  ["ref-05-turnaround-base.jpg", "ref-05-turnaround-base.jpg.enc"],
  ["ref-06-fullbody-base.jpg", "ref-06-fullbody-base.jpg.enc"],
  ["thumbs/ref-05-turnaround-base.jpg", "thumbs/ref-05-turnaround-base.jpg.enc"],
  ["thumbs/ref-06-fullbody-base.jpg", "thumbs/ref-06-fullbody-base.jpg.enc"],
  ["ref-05-turnaround-base.pdf", "ref-05-turnaround-base.pdf.enc"],
  ["ref-06-fullbody-base.pdf", "ref-06-fullbody-base.pdf.enc"],
];

const password = process.argv[2];
if (!password) {
  console.error("使い方: node tools/encrypt-protected.mjs <パスワード>");
  process.exit(1);
}

fs.mkdirSync(path.join(OUT, "thumbs"), { recursive: true });

for (const [srcName, outName] of FILES) {
  const srcPath = path.join(SRC, srcName);
  const outPath = path.join(OUT, outName);
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(12);
  const key = crypto.pbkdf2Sync(password, salt, 150000, 32, "sha256");
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const ct = Buffer.concat([
    cipher.update(fs.readFileSync(srcPath)),
    cipher.final(),
    cipher.getAuthTag(),
  ]);
  fs.writeFileSync(outPath, Buffer.concat([salt, iv, ct]));
  console.log(`${outName}  ${(ct.length / 1024).toFixed(0)} KB`);
}
console.log("done. パスワード: " + "*".repeat(password.length));
