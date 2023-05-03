import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files"
import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import remarkPrism from "remark-prism"

const Banner = defineNestedType(() => ({
  name: "Banner",
  fields: {
    url: {
      type: "string",
      description: "The url to the banner image",
      required: true
    },
    img: {
      type: "json",
      description: "The props for image component",
      required: false
    },
    blur: {
      type: "string",
      description: "Base64 encoded blurred image",
      required: false
    },
    description: {
      type: "string",
      description: "The description for the image",
      required: true
    },
    photographer: {
      type: "string",
      description: "The photographer of the image",
      required: false
    },
    source: {
      type: "string",
      description: "The original Unsplash source of the image",
      required: false
    }
  }
}))

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the article",
      required: true
    },
    description: {
      type: "markdown",
      description: "The description of the article",
      required: false
    },
    banner: {
      type: "nested",
      of: Banner,
      required: false
    },
    series: {
      type: "string",
      description: "The article's corresponding series",
      required: false
    },
    tags: {
      type: "list",
      description: "The tags of the article",
      of: { type: "string" },
      default: []
    },
    created: {
      type: "date",
      description: "The created date of the article",
      required: true
    },
    updated: {
      type: "date",
      description: "The most recent updated date of the article",
      required: true
    },
    readingTime: {
      type: "string",
      description: "The estimated readingTime",
      required: false
    },
    language: {
      type: "enum",
      description: "The language of the article",
      options: ["en", "zh"],
      default: "en"
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    }
  }
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [remarkGfm, remarkPrism, remarkMath],
    rehypePlugins: [rehypeKatex]
  }
})
