import { z, defineCollection } from 'astro:content';

const skills = defineCollection({
	type: 'data',
	schema: z.object({
		skill: z
			.array(z.string())
			.or(z.string())
			.transform(v => typeof v === "string" ? [ v ] : v),
		order: z.number()
	})
});

const experience = defineCollection({
	type: 'content',
	schema: z.object({
		role: z.string(),
		org: z.string(),
		startDate: z
			.string()
			.or(z.date())
			.transform(v => new Date(v)),
		endDate: z
			.string()
			.or(z.date())
			.transform(v => new Date(v))
			.optional(),
		order: z.number().optional()
	}),
});

const education = defineCollection({
	type: 'data',
	schema: z.object({
		award: z.string(),
		school: z.string(),
		startDate: z
			.string()
			.or(z.date())
			.transform(v => new Date(v)),
		endDate: z
			.string()
			.or(z.date())
			.transform(v => new Date(v))
	})
})

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		blurb: z.string(),
		startDate: z
			.string()
			.or(z.date())
			.transform(v => new Date(v)),
		lastUpdated: z
			.string()
			.or(z.date())
			.transform(v => new Date(v)),
		images: z
			.array(z
				.object({
					src: z.string(),
					alt: z.string().optional(),
					fit: z
						.union([
							z.literal('contain'),
							z.literal('cover'),
							z.literal('fill')
						])
						.optional()
				})
				.or(z.string())
				.transform(v => typeof v === 'string' ? { src: v } : v)
			)
			.optional(),
		links: z
			.object({
				source: z.string().optional(),
				demo: z.string().optional(),
				live: z.string().optional(),
				additional: z
					.array(z
						.object({
							label: z.string(),
							target: z.string(),					
							icon: z
								.object({
									name: z.string(),
									size: z.number().or(z.string()).optional(),
									width: z.number().or(z.string()).optional(),
									height: z.number().or(z.string()).optional()
								})
								.or(z.string())
								.optional(),
							type: z
								.union([
									z.literal('internal'),
									z.literal('external')
								])
								.optional()
								.default('external'),
							btn: z.boolean().optional().default(true),
						})
					)
					.optional()
			})
			.optional()
	}),
});

export const collections = { skills, experience, education, projects };