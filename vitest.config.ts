/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
	test: {
		include: [ "*.test.ts" ],
		coverage: {
			reporter: [ "html-spa" ],
		},
	},
});
