import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 750,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          reactThree: ["@react-three/fiber"],
          drei: ["@react-three/drei"],
          animation: ["gsap", "@gsap/react"],
          email: ["@emailjs/browser"],
        },
      },
    },
  },
});
