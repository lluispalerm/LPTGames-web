import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/LPTGames-web/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'root': fileURLToPath(new URL('./', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        drr: './Games/DRR/index.html',
        maxibus: './Games/Maxibus/index.html',
        nn: './Games/NN/index.html',
      }
    }
  }
})
