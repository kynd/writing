import { defineConfig } from 'astro/config';
import { visit } from 'unist-util-visit';

const BASE = '/writing';

function remarkRebaseLinks() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      if (node.url.startsWith('/') && !node.url.startsWith('//')) {
        node.url = BASE + node.url;
      }
    });
  };
}

export default defineConfig({
  site: 'https://www.kynd.info',
  base: BASE,
  markdown: {
    remarkPlugins: [remarkRebaseLinks],
  },
  output: 'static',
  build: {
    assets: 'assets',
  },
  devToolbar: {
    enabled: false,
  },
});
