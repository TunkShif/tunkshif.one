import ArticleCard from "@/components/articles/article-card"
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid"
import type { Article } from "contentlayer/generated"
import Link from "next/link"

type RecentProps = {
  articles: Article[]
}

const Recent = ({ articles }: RecentProps) => {
  return (
    <section>
      <div className="flex items-end justify-between border-b border-slate-900/10 pb-1 dark:border-white/10">
        <h2 className="text-primary text-2xl font-semibold">Recent</h2>
        <Link
          href="/articles"
          className="group inline-flex items-center transition duration-300 ease-in-out hover:text-slate-900 dark:hover:text-slate-200"
        >
          <span className="mr-0.5">MORE</span>
          <span className="inline-block">
            <ChevronDoubleRightIcon className="h-4 w-4 translate-x-0 transform transition duration-300 ease-in-out group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>

      <div className="-mx-4 mt-5 md:mx-auto">
        <div className="flex w-full snap-x justify-start gap-4 overflow-x-auto py-2 lg:flex-wrap">
          {articles.map((article) => (
            <div className="w-72 flex-none shrink-0 snap-center @container" key={article._id}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recent
