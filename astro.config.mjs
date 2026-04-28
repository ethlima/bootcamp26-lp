import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bootcamp.ethlima.org',
  vite: {
    plugins: [tailwindcss()],
  },
});
