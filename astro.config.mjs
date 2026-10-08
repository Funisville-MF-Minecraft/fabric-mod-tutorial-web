// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://funisville-mf-minecraft.github.io',
	base: '/fabric-mod-tutorial-web',
	integrations: [
		starlight({
			title: 'Fabric Modding Guide',
			description: 'Fabric modding for Java Edition, server-side hosting, and Bedrock compatibility with Geyser and Floodgate.',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/' }],
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'Overview', slug: 'index' },
						{ label: 'What is modding?', slug: 'about/what-is-modding' },
						{ label: 'Quickstart', slug: 'start/quickstart' },
					],
				},
				{
					label: 'Foundations',
					items: [{ autogenerate: { directory: 'foundations' } }],
				},
				{
					label: 'Server-side Fabric',
					items: [{ autogenerate: { directory: 'server' } }],
				},
				{
					label: 'Bedrock connectivity',
					items: [{ autogenerate: { directory: 'bedrock' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
