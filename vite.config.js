import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  build: {
    chunkSizeWarningLimit: 1600, // in KB, e.g. 1000 = 1 MB
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/postprocessing'],
          'gsap-vendor': ['gsap', '@gsap/react'],
          'ui-vendor': ['primereact', 'sweetalert2']
        }
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
