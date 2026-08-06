// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { printsPlugin } from './src/plugins/prints.mjs';

// https://astro.build/config
export default defineConfig({
  markdown: {
    // Renders markdown images in posts as photo prints — see the plugin.
    processor: satteri({ hastPlugins: [printsPlugin] }),
  },
});
