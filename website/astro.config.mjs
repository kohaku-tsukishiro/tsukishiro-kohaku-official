// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://tsukishiro-kohaku.com",
  integrations: [sitemap()],
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
