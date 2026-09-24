import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().optional(),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    event: z.string().optional(),
    date: z.coerce.date().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    slides: z.string().url().optional(),
    video: z.string().url().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, talks };
