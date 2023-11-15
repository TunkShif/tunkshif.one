import { getCollection, getEntry } from "astro:content"
import { compareDesc } from "date-fns"

export const Posts = {
  async all() {
    const posts = await getCollection("posts")
    return posts.sort((a, b) => compareDesc(a.data.created, b.data.created))
  },
  async recent(limit = 5) {
    const posts = await Posts.all()
    return posts.slice(0, limit)
  },
  async find(slug: string) {
    const post = await getEntry("posts", slug)
    if (!post) throw new Error(`Post with slug '${slug}' cannot be found.`)
    return post
  }
}

export const Projects = {
  async all() {
    const projects = await getCollection("projects")
    return projects.sort((a, b) => compareDesc(a.data.created, b.data.created))
  }
}
