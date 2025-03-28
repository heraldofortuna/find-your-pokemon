import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "microfrontend2",
      filename: "remoteEntry.js",
      remotes: {
        "find-your-pokemon": "http://localhost:3000/assets/remoteEntry.js",
      },
      exposes: {
        "./PokemonHistorial": "./src/PokemonHistorial",
      },
      shared: ["react", "react-dom", "zustand"],
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  }
})


