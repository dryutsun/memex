import { z, defineCollection } from 'astro:content';
const blogCollection = defineCollection({
	schema: z.object({
		draft: z.boolean().default(false),
		date: z.date().transform((str) => new Date(str)),
		title: z.string(),
		thumbnail: z.string(),
		category: z.enum(['Personal', 'Programming', 'Notes']),
		tags: z.array(z.string()).optional(),
		share: z.object({
			image: z.string().url().optional(),
			title: z.string(),
			description: z.string(),
		})
		.strict(),
	}),
});

const projectCollection = defineCollection({
	schema: z.object({
		draft: z.boolean().default(false),
		date: z.date().transform((str) => new Date(str)),
		thumbnail: z.string().optional(),
		gh_url: z.string().url().optional(),
		deploy_url: z.string().url().optional(),
		project_name: z.string(),
		stack: z.array(z.string()).optional(),
		tags: z.array(z.string()).optional(),
		description: z.string().optional()
	}).strict()
});

export const collections = {
	'blog': blogCollection,
	'projects': projectCollection,
}
