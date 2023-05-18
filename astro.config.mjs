import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelStatic from "@astrojs/vercel/static"

// https://astro.build/config
export default defineConfig({
	output: "static",
	adapter: vercelStatic(),
	integrations: [tailwind({
		config: {
			applyBaseStyles: false,
		}
	})],
	// server: {
	// 	port: 5000,
	// 	host: "192.168.50.68"
	// }
});
