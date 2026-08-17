import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		dateFormatted: z.string(),
		tags: z.array(z.string()).optional(),
		heroImage: z.string().optional(),
		// Opt-out for posts whose article body already carries an equivalent image
		// (e.g. an in-body architecture diagram) — heroImage still drives the /posts
		// and homepage cards, just not layouts/post.astro's .prj-hero.
		showHeroInArticle: z.boolean().optional(),
	}),
});

const projectCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		status: z.enum(["active", "building", "shipped"]),
		category: z.enum(["work", "personal"]),
		tags: z.array(z.string()).optional(),
		startDate: z.string().optional(),
		liveUrl: z.string().optional(),
		githubUrl: z.string().optional(),
		downloadUrl: z.string().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = {
	post: postCollection,
	project: projectCollection,
};
