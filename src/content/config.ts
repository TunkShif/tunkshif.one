import { defineCollection, z } from "astro:content"

const Post = z.object({
  title: z.string(),
  created: z.string(),
  tags: z.array(z.string())
})

// const Serie = z.object({
//   title: z.string(),
//   posts: z.array(Post)
// })

const posts = defineCollection({
  schema: Post
})

// const series = defineCollection({
//   schema: Serie
// })

export const collections = { posts }
