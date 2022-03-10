import { InferGetStaticPropsType } from "next"
import Head from "next/head"
import Link from "next/link"
import { repository } from "../../lib"
import { date } from "../../lib/helper"

const Posts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="space-y-4">
      <Head>
        <title>All Posts - tunkshif.one</title>
      </Head>
      {posts.map((post) => (
        <div
          key={post.frontmatter.slug}
          className="flex flex-col space-y-1 text-gray-700 dark:text-gray-200"
        >
          <h2>
            <Link href={`/post/${post.frontmatter.slug}`}>
              <a className="text-lg font-medium hover:underline">
                {post.title}
              </a>
            </Link>
            {post.frontmatter.lang == "zh" && (
              <span className="ml-2 inline-flex select-none items-center justify-center rounded-sm border border-gray-700 px-1 text-xs dark:border-gray-200">
                中文
              </span>
            )}
          </h2>
          <div className="text-gray-600 dark:text-gray-400">
            <time dateTime={post.createdAt}>{date(post.createdAt)}</time>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts

export const getStaticProps = async (_ctx: any) => {
  const posts = await repository.getTitles()
  return {
    props: { posts },
    revalidate: 60
  }
}
