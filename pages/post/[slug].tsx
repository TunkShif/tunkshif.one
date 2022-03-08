import { GetStaticPaths, InferGetStaticPropsType } from "next"
import * as repo from "../../lib/repo"
import "prism-themes/themes/prism-one-dark.css"

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <div>
        <span>{post.title}</span>
        <span> </span>
        <span>{post.createdAt}</span>
      </div>
      <article
        className="prose p-2"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></article>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await repo.getTitles()
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: any) => {
  const posts = await repo.getPosts()
  const post = posts.filter((post) => post.slug === params?.slug)[0]
  return {
    props: { post },
    revalidate: 60
  }
}

export default Post
