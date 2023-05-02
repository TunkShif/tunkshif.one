import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import createPagination from "@/utils/pagination"
import Link from "next/link"

const button = /* tw */ `text-lg inline-flex bg-white border border-slate-900/10 transition duration-300 ease-in-out dark:bg-slate-800 dark:border-white/10 justify-center items-center p-1 h-10 w-10 first:rounded-l-lg last:rounded-r-lg first:border-r first:border-l border-l-0 hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-slate-900 dark:active:bg-slate-950 data-[active=true]:bg-gray-100 dark:data-[active=true]:bg-slate-900`

type PaginationProps = {
  count: number
  current: number
}

const Pagination = ({ count, current }: PaginationProps) => {
  const { hasPrev, hasNext, items } = createPagination({ count, current, size: 4 })

  return (
    <div className="flex items-center">
      {hasPrev && (
        <Link href={`/articles/page/${current - 1}`} className={button}>
          <span className="sr-only">goto previous page</span>
          <ChevronLeftIcon className="h-6 w-6" />
        </Link>
      )}

      {items.map(({ index, isCurrent }) => (
        <Link
          key={`page-${index}`}
          href={`/articles/page/${index}`}
          className={button}
          data-active={isCurrent}
        >
          {index}
        </Link>
      ))}

      {hasNext && (
        <Link href={`/articles/page/${current + 1}`} className={button}>
          <span className="sr-only">goto next page</span>
          <ChevronRightIcon className="h-6 w-6" />
        </Link>
      )}
    </div>
  )
}

export default Pagination
