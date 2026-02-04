// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vitaburgas.com',
  output: 'static', // Prerender all pages at build time
  build: {
    assets: 'assets', // Asset folder name
    inlineStylesheets: 'auto' // Inline small stylesheets for faster loading
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'bg',
        locales: { bg: 'bg-BG' }
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: true
    }
  }
});
