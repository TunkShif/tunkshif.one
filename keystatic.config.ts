import { collection, config, fields, singleton } from "@keystatic/core"
import { env } from "~/libs/environment"

const storage =
  env.MODE === "production"
    ? {
        kind: "github" as const,
        repo: {
          owner: env.PUBLIC_GITHUB_OWNER,
          name: env.PUBLIC_GITHUB_REPO
        }
      }
    : { kind: "local" as const }

const settings = singleton({
  label: "Settings",
  path: "src/settings",
  format: "json",
  schema: {
    titleSuffix: fields.text({ label: "Site Tittle Suffix", validation: { isRequired: true } }),
    navigations: fields.array(
      fields.object({
        name: fields.slug({ name: { label: "Name" } }),
        route: fields.text({ label: "Route", validation: { isRequired: true } }),
        icon: fields.text({ label: "Icon", validation: { isRequired: true } })
      }),
      {
        label: "Navigations",
        itemLabel: (item) => `${item.fields.name.value.name} (${item.fields.route.value})`
      }
    )
  }
})

const posts = collection({
  label: "Posts",
  slugField: "title",
  path: "src/content/posts/*",
  columns: ["draft", "category", "created"],
  entryLayout: "content",
  format: {
    contentField: "content"
  },
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    draft: fields.checkbox({ label: "Draft", defaultValue: true }),
    summary: fields.text({ label: "Summary", multiline: true }),
    language: fields.select({
      label: "Language",
      options: [
        { label: "中文", value: "zh" },
        { label: "English", value: "en" }
      ],
      defaultValue: "zh"
    }),
    created: fields.date({
      label: "Created",
      defaultValue: { kind: "today" }
    }),
    category: fields.select({
      label: "Category",
      options: [
        { label: "Dev", value: "Dev" },
        { label: "Life", value: "Life" }
      ],
      defaultValue: "Dev"
    }),
    topics: fields.array(fields.text({ label: "Topic" }), {
      label: "Topics",
      itemLabel: (item) => item.value
    }),
    content: fields.mdx({
      label: "Content",
      options: {
        image: {
          directory: "src/assets/images/posts",
          publicPath: "../../assets/images/posts/"
        }
      }
    })
  }
})

export default config({
  storage,
  singletons: {
    settings
  },
  collections: {
    posts
  }
})
