// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Prerender all pages at build time
  build: {
    assets: 'assets', // Asset folder name
    inlineStylesheets: 'auto' // Inline small stylesheets for faster loading
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: true
    }
  }
});
