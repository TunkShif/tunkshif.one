import { defineCollection, z } from "astro:content"

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    draft: z.boolean().default(true),
    summary: z.string(),
    language: z.enum(["zh", "en"]),
    category: z.enum(["Dev", "Life"]),
    topics: z.array(z.string()),
    created: z.date()
  })
})

const journals = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    draft: z.boolean().default(true),
    summary: z.string(),
    language: z.enum(["zh", "en"]),
    category: z.enum(["Dev", "Language"]),
    topics: z.array(z.string()),
    created: z.date()
  })
})

export const collections = {
  posts,
  journals
}
