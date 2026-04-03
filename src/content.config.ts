import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const libraryCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/library" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    domain: z.string(),
    stars: z.number().optional(),
    links: z.object({
      github: z.string().optional(),
      website: z.string().optional(),
    }).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'library': libraryCollection,
};
