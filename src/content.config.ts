import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const teamCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number(),
    icon: z.string().optional(),
    image: z.string().optional(),
  }),
});

const procedureItem = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon: z.string().optional(),
  details: z.string().optional(),
});

const proceduresCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/procedures' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number(),
    image: z.string().optional(),
    items: z.array(procedureItem),
  }),
});

const diseasesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diseases' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    symptoms: z.array(z.string()),
    treatments: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const newsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  'team': teamCollection,
  'procedures': proceduresCollection,
  'diseases': diseasesCollection,
  'pages': pagesCollection,
  'news': newsCollection,
};
