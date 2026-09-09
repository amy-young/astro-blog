import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		dateFormatted: z.string(),
		tags: z.array(z.string()).optional(),
		// REQUIRED as of 2026-09-09, was optional. A post without a hero ships a card
		// with no image on /posts and the homepage, and produces a link preview with
		// no image on LinkedIn, Slack and iMessage. That happened once and was only
		// caught by eye. Making it required turns it into a build failure instead.
		// Note it fails at `astro build`, NOT `astro check` — collection schemas are
		// validated when getCollection runs, and `astro check` only type-checks .astro
		// files. Verified 2026-09-09 by removing a heroImage: check reported 0 errors,
		// build threw InvalidContentEntryFrontmatterError "heroImage: Required".
		// deploy-staging.yml runs `astro check && astro build`, so it still cannot ship.
		// Deliberately NOT applied to the project collection: publications-intelligence
		// has no hero and is intentionally unlinked.
		heroImage: z.string(),
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
