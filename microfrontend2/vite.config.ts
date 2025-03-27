import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "microfrontend2",
      filename: "remoteEntry.js",
      exposes: {
        "./Microfrontend2": "./src/Microfrontend2",
      },
      shared: ["react", "react-dom", "zustand"],
    }),
  ],
})
