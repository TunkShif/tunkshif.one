import ArticleCard from "@/components/articles/article-card"
import Pagination from "@/components/articles/pagination"
import SplashText from "@/components/common/splash-text"
import Layout from "@/components/layout"
import { Articles } from "@/content"
import { RssIcon } from "@heroicons/react/24/solid"
import { type Article } from "contentlayer/generated"
import type { GetStaticProps } from "next"
import Link from "next/link"

type ArticlesProps = {
  page: number
  total: number
  articles: Article[]
}

export default function ArticlesPage({ articles, page, total }: ArticlesProps) {
  return (
    <Layout title="Articles">
      <header className="mb-8 mt-12">
        <div className="flex items-center justify-between">
          <SplashText>
            <h1 className="text-primary text-3xl font-bold">Articles</h1>
          </SplashText>

          <div>
            <Link href="/rss">
              <RssIcon className="h-7 w-7" />
            </Link>
          </div>
        </div>
      </header>

      <section className="mb-8">
        <div className="space-y-4 @container">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      </section>

      <section className="flex items-center justify-end">
        <Pagination count={total} current={page} />
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<ArticlesProps> = async () => {
  const total = await Articles.pages()
  const articles = await Articles.page(1)
  return {
    props: {
      articles,
      page: 1,
      total
    }
  }
}
