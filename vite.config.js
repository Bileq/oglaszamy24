import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://api.oglaszamy24.pl/',
        changeOrigin: true,
        //"API-Key": "BDc4JU6zygD3NDiV31ifniVDHoCClu5c",

      }
    }
  }
})
