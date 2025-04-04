import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/trafficLights": "http://localhost:5000",
      "/settings": "http://localhost:5000"
    }
  }
})
