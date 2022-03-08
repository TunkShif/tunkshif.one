import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import remarkRehype from "remark-rehype"
import rehypePrism from "rehype-prism-plus"
import rehypeStringify from "rehype-stringify"

export const render = (content: string) =>
  unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(content)
    .then((vfile) => String(vfile))
