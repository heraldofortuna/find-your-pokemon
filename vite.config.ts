import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "find-your-pokemon",
      remotes: {
        microfrontend1: "http://localhost:3001/assets/remoteEntry.js",
        microfrontend2: "http://localhost:3002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "zustand"],
    }),
    tailwindcss(),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3000,
  },
})
