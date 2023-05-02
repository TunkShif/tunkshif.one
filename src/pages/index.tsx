import Hero from "@/components/home/hero"
import Recent from "@/components/home/recent"
import Layout from "@/components/layout"
import { Articles } from "@/content"
import type { Article } from "contentlayer/generated"
import type { GetStaticProps } from "next"

type HomeProps = {
  articles: Article[]
}

export default function HomePage({ articles }: HomeProps) {
  return (
    <Layout>
      <main className="pb-8 pt-16">
        <Hero />
        <Recent articles={articles} />
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const articles = await Articles.recent()
  return { props: { articles } }
}
