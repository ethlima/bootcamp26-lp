import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bootcamp.ethlima.org',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
