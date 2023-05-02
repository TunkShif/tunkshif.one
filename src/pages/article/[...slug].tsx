import { default as ArticleContent } from "@/components/articles/article"
import Comments from "@/components/articles/comments"
import Layout from "@/components/layout"
import { Articles } from "@/content"
import type { Article } from "contentlayer/generated"
import type { GetStaticPaths, GetStaticProps } from "next"

type ArticleProps = {
  article: Article
}

export default function ArticlePage({ article }: ArticleProps) {
  return (
    <Layout title={article.title}>
      <ArticleContent article={article} />
      <Comments />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Articles.urls()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = ((params?.slug as string[]) ?? []).join("/")
  const article = Articles.find(slug)

  if (!article) return { notFound: true }
  return {
    props: {
      article
    }
  }
}
