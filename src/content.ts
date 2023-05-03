import { type Article, allArticles } from ".contentlayer/generated"
import { compareDesc } from "date-fns"
import { cluster, omit } from "radash"
import { getPlaiceholder } from "plaiceholder"
import { estimatedReadingTime } from "@/utils/formatter"

const articles = Promise.all(
  allArticles
    .sort((a, b) => compareDesc(new Date(a.created), new Date(b.created)))
    .map(async (article) => {
      if (article.banner) {
        const { base64, img } = await getPlaiceholder(article.banner.url)
        article.banner.img = img
        article.banner.blur = base64
      }
      article.readingTime = estimatedReadingTime(article.body.raw)
      return article
    })
)
const omitted = articles.then((articles) =>
  articles.map((article) => omit(article, ["body"]))
) as Promise<Article[]>
const paginated = omitted.then((articles) => cluster(articles, 5))

export const Articles = {
  urls: () => allArticles.map((article) => article.url),
  recent: () => omitted.then((articles) => articles.slice(0, 6)),
  find: (slug: string) =>
    articles.then((articles) =>
      articles.find((article) => article._raw.flattenedPath === `article/${slug}`)
    ),
  page: (page: number = 1) => paginated.then((paginated) => paginated[page - 1]),
  pages: () => paginated.then((paginated) => paginated.length)
}
