import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { resolve } from "node:path";
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
	root: "src",
	plugins: [
		react(),
		tailwindcss(),
		svgr()
	],
	publicDir: resolve(__dirname, "public"),
	build: {
		// dist�t�H���_�ɏo��
		outDir: resolve(__dirname, "dist"),
		// ���݂��Ȃ��Ƃ��̓t�H���_���쐬����
		emptyOutDir: true,
		copyPublicDir: true,
		rollupOptions: {
			// entry point������index.html�̃p�X
			input: {
				"": resolve(__dirname, "./src/index.html"),
			},
			// bundle.js�������ւ�����
			output: {
				entryFileNames: "assets/bundle.js",
			},
		},
	},
})
