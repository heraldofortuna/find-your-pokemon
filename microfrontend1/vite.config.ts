import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "microfrontend1",
      filename: "remoteEntry.js",
      exposes: {
        "./Microfrontend1": "./src/Microfrontend1",
      },
      shared: ["react", "react-dom", "zustand"],
    }),
  ],
})
