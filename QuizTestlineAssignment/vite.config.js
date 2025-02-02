import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss/vite";  // Correct import for Tailwind CSS

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
});
