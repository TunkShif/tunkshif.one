import { default as ArticleContent } from "@/components/articles/article"
import Comments from "@/components/articles/comments"
import Layout from "@/components/layout"
import SEO from "@/components/layout/seo"
import { Articles } from "@/content"
import type { Article } from "contentlayer/generated"
import type { GetStaticPaths, GetStaticProps } from "next"

type ArticleProps = {
  article: Article
}

export default function ArticlePage({ article }: ArticleProps) {
  return (
    <Layout title={article.title}>
      <SEO
        description={article.description?.raw}
        keywords={article.tags}
        image={"https://tunkshif.one" + article.banner?.url}
        canonical={"https://tunkshif.one" + article.url}
      />
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

export const getStaticProps: GetStaticProps<ArticleProps> = async ({ params }) => {
  const slug = ((params?.slug as string[]) ?? []).join("/")
  const article = await Articles.find(slug)

  if (!article) return { notFound: true }
  return {
    props: {
      article
    }
  }
}
