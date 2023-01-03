import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import ElementPlus from 'unplugin-element-plus/vite'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		jsx(),
		ElementPlus({
			useSource: true,
		}),
	],
	resolve: {
		alias: {
			'@/': '/src/',
		},
	},
	// css: {
	// 	preprocessorOptions: {
	// 		scss: {
	// 			additionalData: `@use "./styles/element/index.scss" as *;`,
	// 		},
	// 	},
	// },
})
