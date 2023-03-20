import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@components': resolve(__dirname, 'src/components'),
			'@data': resolve(__dirname, 'src/data'),
			'@utils': resolve(__dirname, 'src/utils')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
