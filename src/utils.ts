import type { MDXInstance } from "astro"
import type { Frontmatter } from "./types"

export const sortedPosts = (posts: MDXInstance<Frontmatter>[]) =>
  posts.sort(
    (a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf()
  )
