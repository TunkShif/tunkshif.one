import { Articles } from "@/content"
import ArticlesPage from "@/pages/articles"
import type { GetStaticPaths, GetStaticProps } from "next"
import { range } from "radash"

export default ArticlesPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array.from(range(1, await Articles.pages())).map((it) => `/articles/page/${it}`)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params?.page as string)
  const total = await Articles.pages()
  const articles = await Articles.page(page)

  if (!articles) return { notFound: true }
  return {
    props: { articles, page, total }
  }
}
