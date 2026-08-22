// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: 本番ドメイン決定後に設定する（OGP画像の絶対URL化に必須）
  // site: "https://example.com",
  vite: {
    server: {
      watch: {
        // サイトのソースコードではないフォルダは監視しない
        // （OneDrive等でロックされたファイルを watch すると EBUSY でサーバーが不安定になる）
        ignored: ['**/private-assets/**'],
      },
    },
  },
});
