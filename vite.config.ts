import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "node:path";
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: process.env.GITHUB_PAGES ? "/BubbleLog/" : "/",
  root: "src",
  plugins: [react(), tailwindcss(), svgr()],
  publicDir: resolve(__dirname, "public"),
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      // entry を自動で探させる（index.htmlがsrcにあるなら問題なし）
    },
  },
})
