/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(({mode}) => {
  const base=mode==='pages'?'/spyder-leaderboard/everwell/':'/'
  return {
  base,
  plugins: [
    react(),
    VitePWA({
      // The app registers explicitly to check for updates whenever it returns to the foreground.
      registerType: 'autoUpdate',
      injectRegister: null,
      includeAssets: ['everwell-mark-v2.svg', 'everwell-apple-v2.png'],
      manifest: {
        name: 'Everwell',
        short_name: 'Everwell',
        description:
          'Educational pregnancy preparation, pregnancy, postpartum and early childhood health — research draft, not clinical advice.',
        theme_color: '#6d7a5f',
        background_color: '#f1efe9',
        display: 'standalone',
        orientation: 'portrait-primary',
        id: base,
        start_url: base,
        scope: base,
        icons: [
          {
            src: 'everwell-192-v2.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'everwell-512-v2.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'everwell-512-v2.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        navigateFallback: base+'index.html',
        globPatterns: ['**/*.{js,css,html,svg,png,ico,json,woff2}'],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 900,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
  }
})
