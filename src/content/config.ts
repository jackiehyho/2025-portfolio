// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection


const portfolioCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    carousel: z.array(z.object({
        src: image(),
        caption: z.string(),
      }))
  })
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    portfolio: portfolioCollection
  };