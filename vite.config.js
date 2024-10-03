import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/react']
  }  
  /* ,
  optimizeDeps: {
    include: ['@mui/icons-material']
  },
  ssr: {
    noExternal: ['@mui/icons-material']
  } */
})


