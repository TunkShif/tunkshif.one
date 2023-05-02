import { allArticles } from ".contentlayer/generated"
import { compareDesc } from "date-fns"
import { cluster } from "radash"

const articles = allArticles.sort((a, b) => compareDesc(new Date(a.created), new Date(b.created)))
const paginated = cluster(articles, 5)

export const Articles = {
  urls: () => articles.map((article) => article.url),
  recent: () => articles.slice(0, 3),
  find: (slug: string) =>
    articles.find((article) => article._raw.flattenedPath === `article/${slug}`),
  page: (page: number = 1) => paginated[page - 1],
  pages: () => paginated.length
}
