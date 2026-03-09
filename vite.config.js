/**
 * Vite config: React plugin enables JSX and Fast Refresh in development.
 * No env or alias needed for this project; API URL is in context.jsx.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
