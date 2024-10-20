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
		source: z.string().optional(),
		demo: z.string().optional(),
		startDate: z
			.string()
			.or(z.date())
			.transform(v => new Date(v)),
		lastUpdated: z
			.string()
			.or(z.date())
			.transform(v => new Date(v))
	}),
});

export const collections = { skills, experience, education, projects };