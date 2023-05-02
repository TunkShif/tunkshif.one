import Link from "next/link"

type TagProps = {
  text: string
}

const Tag = ({ text }: TagProps) => {
  return (
    <Link
      href={`/tags/${text}`}
      className="inline-block whitespace-nowrap rounded bg-gray-200 bg-opacity-60 px-2 py-1 text-xs font-medium text-gray-500 ring-inset transition duration-300 ease-in-out before:content-['#'] hover:bg-opacity-100 dark:bg-gray-900 dark:bg-opacity-100 dark:text-gray-200 dark:ring-1 dark:ring-white/10 dark:hover:bg-opacity-60 dark:hover:ring-white/20"
    >
      {text}
    </Link>
  )
}

export default Tag
