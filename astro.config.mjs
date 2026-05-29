import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.kynd.info',
  base: '/writing',
  output: 'static',
  build: {
    assets: 'assets',
  },
  devToolbar: {
    enabled: false,
  },
});
