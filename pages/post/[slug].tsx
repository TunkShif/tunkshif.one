import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { GetStaticPaths, InferGetStaticPropsType } from "next"
import { find } from "remeda"
import { Error } from "../../components"
import { repository } from "../../lib"
import { date } from "../../lib/helper"
import { Author, Comment } from "../../types"
import "katex/dist/katex.min.css"
import "prism-themes/themes/prism-one-dark.css"

const Avatar = ({ author }: { author: Author }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Image
        src={author.avatarUrl}
        width={32}
        height={32}
        alt="user avatar"
        className="rounded-full"
      />
      <span>
        <Link href={author.url}>
          <a target="_blank">{author.login}</a>
        </Link>
      </span>
    </div>
  )
}

const Comments = ({
  postUrl,
  comments
}: {
  postUrl: string
  comments: (Comment & { html: string })[]
}) => {
  return (
    <section className="space-y-8">
      <div className="space-y-6">
        {comments.map((comment) => (
          <div className="flex flex-col space-y-4" key={comment.url}>
            <div className="flex items-center space-x-4 text-sm font-medium text-gray-600 dark:text-gray-200">
              <Avatar author={comment.author} />
              <div>
                <time dateTime={comment.createdAt}>
                  {date(comment.createdAt)}
                </time>
              </div>
            </div>
            <div
              className="prose dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: comment.html }}
            ></div>
          </div>
        ))}
      </div>
      <div>
        <Link href={postUrl}>
          <a
            target="_blank"
            className="rounded-md bg-gray-200 bg-opacity-60 px-4 py-2 font-medium text-gray-600 transition-all hover:bg-opacity-100 dark:bg-gray-800 dark:bg-opacity-60 dark:text-gray-200 dark:hover:bg-opacity-100"
          >
            Comment
          </a>
        </Link>
      </div>
    </section>
  )
}

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  return router.isFallback ? (
    <Error>
      <Head>
        <title>Not Available Yet - tunkshif.one</title>
      </Head>
      <p>Page not available yet.</p>
      <p>Maybe come back later?</p>
    </Error>
  ) : (
    <div>
      <Head>
        <title>{post.title} - tunkshif.one</title>
        <meta property="og:title" content="My page title" key={post.title} />
      </Head>
      <section className="mb-4 flex flex-col space-y-4">
        <h1 className="text-4xl font-extrabold dark:text-gray-100">
          {post.title}
        </h1>
        <div className="flex space-x-4">
          {post.frontmatter.tags.map((tag) => (
            <span
              className="rounded-sm bg-gray-200 bg-opacity-60 px-2 py-1 text-sm font-medium text-gray-500 hover:bg-opacity-100 dark:bg-gray-800 dark:bg-opacity-60 dark:text-gray-200 dark:hover:bg-opacity-100"
              key={tag}
            >{`#${tag}`}</span>
          ))}
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-200">
          <Avatar author={post.author} />
          <div>
            <time dateTime={post.createdAt}>{date(post.createdAt)}</time>
          </div>
        </div>
      </section>
      <article
        className="prose mx-auto max-w-5xl prose-blockquote:font-normal prose-code:rounded-sm prose-code:bg-gray-200 prose-code:p-0.5 prose-code:text-gray-500 prose-code:before:content-none prose-code:after:content-none dark:prose-invert dark:prose-code:bg-gray-800 dark:prose-code:text-gray-200"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <hr className="my-8" />
      <Comments comments={post.comments} postUrl={post.url} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await repository.getTitles()
  const paths = posts.map((post) => ({
    params: {
      slug: post.frontmatter.slug
    }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }: any) => {
  const posts = await repository.getPosts()
  const post = find(posts, (post) => post.frontmatter.slug === params?.slug)!!
  return {
    props: { post },
    revalidate: 60
  }
}

export default Post
