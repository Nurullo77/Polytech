import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Для GitHub Pages: base должен совпадать с именем репозитория
  base: '/polytech-school/',
})

