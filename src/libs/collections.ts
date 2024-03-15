import { type CollectionEntry, getCollection, getEntry } from "astro:content"
import { compareDesc } from "date-fns"
import { cluster, group, omit } from "radash"
import invariant from "tiny-invariant"

export type Post = Omit<CollectionEntry<"posts">, "body">
export type Journal = Omit<CollectionEntry<"journals">, "body">
export type JournalGroup = { date: string; journals: Journal[] }

const omitBody = <T extends { body: string }>(item: T) => omit(item, ["body"])

const byDescDate = <T extends { data: { created: Date } }>(a: T, b: T) =>
  compareDesc(a.data.created, b.data.created)

export const Posts = {
  async all() {
    const posts = await getCollection("posts", (post) => !post.data.draft)
    return posts.map(omitBody).sort(byDescDate)
  },
  async paginated(pageSize = 12) {
    const posts = await Posts.all()
    return cluster(posts, pageSize)
  },
  async bySlug(slug: string) {
    const post = await getEntry("posts", slug)
    invariant(post, `Missing post with slug "${slug}"`)
    return omitBody(post)
  }
}

export const Journals = {
  async all() {
    const journals = await getCollection("journals", (journal) => !journal.data.draft)
    return journals.map(omitBody)
  },
  async grouped() {
    const journals = await Journals.all()
    return Object.entries(group(journals, (journal) => journal.data.created.toISOString()))
      .map(([date, journals]) => ({ date, journals: journals ?? [] }))
      .sort((a, b) => compareDesc(a.date, b.date))
  },
  async paginated(pageSize = 8) {
    const journals = await Journals.grouped()
    return cluster(journals, pageSize)
  },
  async bySlug(slug: string) {
    const journal = await getEntry("journals", slug)
    invariant(journal, `Missing journal with slug "${slug}"`)
    return omitBody(journal)
  }
}
