import { collection, config, fields } from "@keystatic/core"
import { isDevelopment } from "~/libs/environment"

const localStorageProvider = { kind: "local" } as const
// TODO: replace the options with environment variables
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
  columns: ["draft", "category", "created"],
  entryLayout: "content",
  format: {
    contentField: "content"
  },
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    draft: fields.checkbox({ label: "Draft", defaultValue: true }),
    created: fields.date({ label: "Created", defaultValue: { kind: "today" } }),
    category: fields.text({ label: "Category" }),
    content: fields.mdx({
      label: "Content",
      options: {
        image: {
          directory: "content/images",
          publicPath: "/content/images",
          schema: {
            title: fields.text({ label: "Caption" })
          }
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
