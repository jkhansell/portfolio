import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // 👈 Tells React to find assets under /portfolio/
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 Maps '@' to your 'src' folder
    },
  },
})