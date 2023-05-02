import Card from "@/components/common/card"
import Tags from "@/components/common/tags"
import { estimatedReadingTime, formatDate } from "@/utils/formatter"
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline"
import type { Article, Banner } from "contentlayer/generated"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

type ArticleCardProps = {
  article: Article
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Card className="group h-full transform transition duration-300 hover:-translate-y-1 hover:scale-[1.01]">
      <div className="flex h-full flex-col @md:min-h-[248px] @md:flex-row @md:group-even:flex-row-reverse">
        <Banner
          className="shrink-0 basis-40 @md:flex-[2] @md:basis-4"
          banner={article.banner}
          href={article.url}
        />

        <Information
          className="flex-1 @md:flex-[3]"
          title={article.title}
          href={article.url}
          tags={article.tags}
          readingTime={article.body.raw}
          createdAt={article.created}
          language={article.language}
          description={article.description?.html}
        />
      </div>
    </Card>
  )
}

const Banner = ({
  href,
  banner,
  className
}: {
  href: string
  banner?: Banner
  className?: string
}) => {
  const img = banner
    ? { ...banner.img, placeholder: "blur", blurDataURL: banner.blur }
    : {
      src: "/images/banner/wave.jpg",
      fill: true,
      sizes: "100vw"
    }

  return (
    <div className={className}>
      <Link href={href} className="relative block aspect-[2/1] h-full w-full">
        <Image
          {...img}
          quality={90}
          alt={banner?.description || "banner image"}
          className="h-full w-full rounded-t-md object-cover @md:rounded-none @md:group-odd:rounded-l-md @md:group-even:rounded-r-md"
        />
      </Link>
    </div>
  )
}

const Information = ({
  title,
  href,
  tags,
  description,
  readingTime,
  createdAt,
  language,
  className
}: {
  title: string
  href: string
  tags: string[]
  description?: string
  readingTime: string
  createdAt: string
  language: string
  className?: string
}) => {
  return (
    <div className={className}>
      <div className="flex h-full w-full flex-col justify-between gap-2 px-4">
        <div className="mt-4 space-y-3">
          <Title title={title} href={href} language={language} />
          <Tags tags={tags} />
          <Description description={description} />
        </div>

        <div className="mb-4 flex shrink-0 grow-0 justify-between @md:justify-start @md:space-x-4">
          <LabeledText icon={CalendarDaysIcon}>
            <time dateTime={createdAt}> {formatDate(createdAt)}</time>
          </LabeledText>
          <LabeledText icon={ClockIcon}>{estimatedReadingTime(readingTime)}</LabeledText>
        </div>
      </div>
    </div>
  )
}

const ZHTag = () => {
  return (
    <span className="ml-2 inline-flex -translate-y-[1px] select-none items-center justify-center rounded-sm border border-gray-700 px-1 text-xs dark:border-gray-200">
      中文
    </span>
  )
}

const Title = ({ title, href, language }: { title: string; href: string; language: string }) => {
  const isZH = language === "zh"

  return (
    <h2 className="text-primary text-lg font-medium leading-tight hover:underline @md:text-xl">
      <Link href={href}>
        <span>{title}</span>
      </Link>
      {isZH && <ZHTag />}
    </h2>
  )
}

const Description = ({ description }: { description?: string }) => {
  if (!description) return null
  return (
    <div className="line-clamp-3">
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
}

const LabeledText = ({ icon: Icon, children }: { icon: any; children: ReactNode }) => {
  return (
    <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400">
      <span>
        <Icon className="h-5 w-5" />
      </span>
      <span className="inline-block text-sm">{children}</span>
    </div>
  )
}

export default ArticleCard
