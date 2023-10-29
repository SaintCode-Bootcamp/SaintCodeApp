import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: process.env.APP_ENV === 'production' ? '/SaintCodeApp/' : '/',
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
  plugins: [react(), VitePWA({
    workbox: {
      globPatterns: ["**/*"],
  },
  // add this to cache all the
  // static assets in the public folder
  includeAssets: [
      "**/*",
  ],
    manifest: {
      "name": "SaintCode Progressive Web App",
      "short_name": "SaintCode PWA",
      "theme_color": "#ffffff",
      "background_color": "#004740",
      "display": "fullscreen",
      "orientation": "portrait",
      "scope": "/",
      "start_url": "/",
      "icons": [
        {
          "src": "icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "icons/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "icons/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png"
        },
        {
          "src": "icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "icons/icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png"
        },
        {
          "src": "icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "icons/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
      "splash_pages": null
    }
  })]
})