import type { APIRoute } from "astro"
import { range } from "radash"
import { Journals } from "~/libs/collections"

const paginated = await Journals.paginated()

export const GET: APIRoute = ({ params }) => {
  const page = Number.parseInt(params.page || "1")
  const posts = paginated[page - 1]

  const meta = {
    current: page,
    hasPrevious: page !== 1,
    hasNext: page !== paginated.length
  }

  return new Response(JSON.stringify({ posts, meta }))
}

export function getStaticPaths() {
  return Array.from(range(1, paginated.length)).map((page) => ({ params: { page } }))
}
