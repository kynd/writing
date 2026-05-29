# Writing by kynd

Notes and essays on math, creative coding, and quasi-physics — published at [kynd.info/writing](https://www.kynd.info/writing/).

Topics include projection and 3D rendering, wave functions, Fourier series, chaos theory, neural networks, category theory, color science, and more. Written in English and Japanese.

## Development

```bash
npm install          # install dependencies
npm run dev          # local dev server
npm run build        # build static site to dist/
node scripts/migrate.js  # re-run migration from source HTML
```

## Deploy

The site is hosted on GitHub Pages. To deploy after a build:

1. Build: `npm run build`
2. Push `dist/` to the `gh-pages` branch

## License

Text and images: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — kynd (Kenichi Yoneda)

Code snippets are for illustrative purposes. Some may include work by others; check comments or links in the relevant pages. Not recommended for production use.
