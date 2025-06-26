import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	server: {
		proxy: {
			"/deezer": {
				target: "https://api.deezer.com",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/deezer/, ""),
			},
		},
	},
	plugins: [react(), tailwindcss()],
});
