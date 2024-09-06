import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PhuThoTourist/', // Đặt đường dẫn cơ sở cho GitHub Pages
  plugins: [react()],
})