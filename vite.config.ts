import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main_app",
      remotes: {
        microfrontend1: "microfrontend1@http://localhost:3001/remoteEntry.js",
        microfrontend2: "microfrontend2@http://localhost:3002/remoteEntry.js",
      },
      shared: ["react", "react-dom", "zustand"],
    })
  ]
})
