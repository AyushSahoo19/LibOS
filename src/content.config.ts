import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const libraryCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/library" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    domain: z.string(),
    collection: z.string().optional(), // New field for grouping
    stars: z.number().optional(),
    links: z.object({
      github: z.string().optional(),
      website: z.string().optional(),
    }).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const collectionsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/collections" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(), // Emoji or icon name
  }),
});

export const collections = {
  'library': libraryCollection,
  'collections': collectionsCollection,
};
