import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.string(),
    date: z.date(),
    isPublish: z.boolean(),
    isPinned: z.boolean().default(false),
  })
})

export const collections = { projects: projectsCollection };
