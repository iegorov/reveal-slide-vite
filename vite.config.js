import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { getSlides } from './slides-loader.js';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          get slides() {
            return getSlides();
          },
        },
      },
      minify: false,
    }),
    {
      name: 'watch-slides',
      apply: 'serve',
      configureServer(server) {
        const slidesPath = path.resolve(__dirname, 'slides');
        server.watcher.add(slidesPath);

        server.watcher.on('change', (file) => {
          if (file.startsWith(slidesPath)) {
            console.log(`[HMR] Слайд изменён: ${file}`);
            server.ws.send({ type: 'full-reload', path: '*' });
          }
        });
      },
    },
  ],
  server: {
    hmr: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
