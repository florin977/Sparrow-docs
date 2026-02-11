// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/florin977/Sparrow-Engine' }],
			sidebar: [
        {
          label: 'Introduction',
          autogenerate: {directory: 'introduction'},
        },
        {
          label: 'Chapter 0',
          autogenerate: {directory: 'chapter_0'}
        },
			],
		}),
	],
});
