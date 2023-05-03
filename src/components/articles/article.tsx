import Tags from "@/components/common/tags"
import { estimatedReadingTime, formatDate } from "@/utils/formatter"
import { CameraIcon } from "@heroicons/react/20/solid"
import type { Article, Banner } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import Image from "next/image"
import Link from "next/link"

import "katex/dist/katex.css"

type ArticleProps = {
  article: Article
}

const Article = ({ article }: ArticleProps) => {
  const MDXContent = useMDXComponent(article.body.code)

  return (
    <>
      <header className="mb-8 mt-8">
        <div className="space-y-4">
          <h1 className="text-primary text-2xl font-extrabold md:text-3xl">{article.title}</h1>

          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
            <Tags tags={article.tags} />

            <div className="flex shrink-0 items-center gap-0.5 text-sm">
              <div>{formatDate(article.created, { numeric: true })}</div>
              <span>·</span>
              <div>{estimatedReadingTime(article.body.raw)}</div>
            </div>
          </div>

          <Banner banner={article.banner} />
        </div>
      </header>

      <article className="prism prose mx-auto max-w-4xl dark:prose-invert">
        <MDXContent />
      </article>
    </>
  )
}

export default Article

const Banner = ({ banner }: { banner?: Banner }) => {
  const img = banner
    ? { ...banner.img, placeholder: "blur", blurDataURL: banner.blur }
    : {
      src: "/images/banner/wave.jpg",
      fill: true,
      sizes: "100vw"
    }

  return (
    <figure>
      <div className="relative mb-2 aspect-[2/1] w-full">
        <Image
          {...img}
          quality={90}
          alt={banner?.description || "banner image"}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>

      {banner?.source && (
        <figcaption className="text-primary flex items-center justify-end gap-1 text-xs ">
          <span className="inline-block">
            <CameraIcon className="h-5 w-5" />
          </span>
          <Link
            href={banner.source}
            target="_blank"
            rel="noreferrer"
            className="inline-block font-medium hover:underline"
          >
            {banner.photographer}
          </Link>{" "}
        </figcaption>
      )}
    </figure>
  )
}
