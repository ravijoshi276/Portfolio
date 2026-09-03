import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url' // 1. Import URL helper
import path from 'path'             // 2. Import path utility

// Get current directory path safely in ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      // 3. Map '@'  physical 'src' directory
      '@': path.resolve(__dirname, './src'), 
    },
  },
})
