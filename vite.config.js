import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/trafficLights": "https://gtsasuktest1.netlify.app",
      "/settings": "https://gtsasuktest1.netlify.app"
    }
  }
})
