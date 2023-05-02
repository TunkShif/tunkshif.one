import { range } from "radash"

type Pagination = {
  hasPrev: boolean
  hasNext: boolean
  items: {
    index: number
    isCurrent: boolean
  }[]
}

type PaginationOptions = {
  count: number
  size: number
  current: number
}

const createPagination = (options: PaginationOptions): Pagination => {
  const { count, size } = options
  const current = options.current - 1
  const hasPrev = current !== 0
  const hasNext = current !== count - 1

  let start = 0
  let end = 0

  if (count <= size) {
    end = count
  } else {
    start = hasPrev ? current - 1 : current
    const maybeEnd = start + size
    end = maybeEnd > count ? count : maybeEnd
    start = end - start < size ? end - size : start
  }

  const items = Array.from(range(start + 1, end)).map((index) => ({
    index: index,
    isCurrent: current === index - 1
  }))

  return {
    hasPrev,
    hasNext,
    items
  }
}

export default createPagination
