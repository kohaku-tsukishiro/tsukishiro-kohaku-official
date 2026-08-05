// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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
