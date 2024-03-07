import { collection, config, fields } from "@keystatic/core"

const isDevelopment = process.env.NODE_ENV === "development"

const localStorageProvider = { kind: "local" } as const
const githubStorageProvider = {
  kind: "github",
  repo: {
    owner: "TunkShif",
    name: "content"
  }
} as const
const storage = isDevelopment ? localStorageProvider : githubStorageProvider

const posts = collection({
  label: "Posts",
  slugField: "title",
  path: "content/posts/*/",
  entryLayout: "content",
  format: { contentField: "content" },
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    draft: fields.checkbox({ label: "Draft", defaultValue: true }),
    created: fields.date({ label: "Created", defaultValue: { kind: "today" } }),
    category: fields.text({ label: "Category" }),
    content: fields.document({
      label: "Content",
      formatting: true,
      dividers: true,
      links: true,
      tables: true,
      images: {
        directory: "content/images",
        publicPath: "/content/images",
        schema: {
          title: fields.text({ label: "Caption" })
        }
      }
    })
  }
})

export default config({
  storage,
  collections: {
    posts
  }
})
