import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kynd.github.io',
  base: '/writing',
  output: 'static',
  build: {
    assets: 'assets',
  },
  devToolbar: {
    enabled: false,
  },
});
