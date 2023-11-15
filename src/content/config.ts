import { defineCollection, z } from "astro:content"

const Post = z.object({
  title: z.string(),
  created: z.coerce.date(),
  category: z.string()
})

const Serie = z.object({
  title: z.string(),
  posts: z.array(Post)
})

const Project = z.object({
  title: z.string(),
  description: z.string(),
  icons: z.array(z.string()),
  website: z.string().optional(),
  github: z.string().optional(),
  pinned: z.boolean(),
  created: z.coerce.date()
})

const posts = defineCollection({ schema: Post })
const series = defineCollection({ schema: Serie, type: "data" })
const projects = defineCollection({ schema: Project, type: "data" })

export type Post = z.infer<typeof Post>
export type Serie = z.infer<typeof Serie>
export type Project = z.infer<typeof Project>

export const collections = { posts, series, projects }
