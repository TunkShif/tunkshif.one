import Link from "next/link"

type TagProps = {
  text: string
}

const Tag = ({ text }: TagProps) => {
  return (
    <Link
      href={`/tags/${text}`}
      className="inline-block whitespace-nowrap rounded border bg-gray-200 px-2 pb-1 pt-0.5 text-xs font-medium text-gray-500 transition duration-300 ease-in-out before:content-['#'] hover:bg-gray-300 hover:text-gray-600 active:bg-gray-400 dark:border-white/10 dark:bg-gray-800 dark:text-slate-300 dark:hover:border-white/20 dark:hover:bg-gray-900 dark:hover:text-slate-200 dark:active:bg-gray-950"
    >
      {text}
    </Link>
  )
}

export default Tag
