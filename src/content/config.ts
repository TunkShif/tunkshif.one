import { defineCollection, z } from "astro:content"

const Post = z.object({
  title: z.string(),
  created: z.string(),
  tags: z.array(z.string())
})

const Serie = z.object({
  title: z.string(),
  posts: z.array(Post)
})

const Project = z.object({
  title: z.string(),
  description: z.string(),
  icons: z.array(z.string()),
  website: z.string(),
  github: z.string(),
  pinned: z.boolean(),
  created: z.string()
})

const posts = defineCollection({ schema: Post })
const series = defineCollection({ schema: Serie })
const projects = defineCollection({ schema: Project })

export const collections = { posts, series, projects }
