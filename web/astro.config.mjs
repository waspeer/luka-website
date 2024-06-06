import netlify from '@astrojs/netlify';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), solidJs(), tailwind()],
  // output: 'server',
  // adapter: netlify(),
});
