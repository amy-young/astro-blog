import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://amyyoung.me",
	// /why-i-write was live on main before this route moved into the post collection
	// (2026-08-16). Redirect rather than retire so existing links and search results
	// don't dead-end.
	redirects: {
		"/why-i-write": "/post/knowledge-compounds-when-you-circulate-it",
	},
});
