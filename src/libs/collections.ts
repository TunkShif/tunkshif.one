import { getCollection, type CollectionEntry } from "astro:content"
import { compareDesc } from "date-fns"
import { cluster } from "radash"

export type Post = CollectionEntry<"posts">

export const Posts = {
  async all() {
    const posts = await getCollection("posts", (post) => !post.data.draft)
    return posts.sort((a, b) => compareDesc(a.data.created, b.data.created))
  },
  async paginated(pageSize = 12) {
    const posts = await Posts.all()
    return cluster(posts, pageSize)
  },
  async bySlug(slug: string) {
    const posts = await Posts.all()
    return posts.find((post) => post.slug === slug)
  }
}
