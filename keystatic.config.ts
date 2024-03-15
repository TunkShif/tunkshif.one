import { collection, config, fields, singleton } from "@keystatic/core"

const storage = import.meta.env.DEV
  ? { kind: "local" as const }
  : {
      kind: "github" as const,
      repo: {
        owner: "TunkShif",
        name: "tunkshif.one"
      }
    }

const settings = singleton({
  label: "Settings",
  path: "src/settings",
  format: "json",
  schema: {
    name: fields.text({ label: "Display Name", validation: { isRequired: true } }),
    intro: fields.text({ label: "Introduction", multiline: true }),
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
    ),
    sicialLinks: fields.array(
      fields.object({
        name: fields.slug({ name: { label: "Name" } }),
        icon: fields.text({ label: "Icon", validation: { isRequired: true } }),
        url: fields.url({ label: "Link", validation: { isRequired: true } })
      }),
      {
        label: "Social Links",
        itemLabel: (item) => item.fields.name.value.name
      }
    )
  }
})

// TODO: (refactor) code reuse

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
        { label: "Language", value: "Language" },
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

const journals = collection({
  label: "Journals",
  slugField: "title",
  path: "src/content/journals/*",
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
        { label: "Language", value: "Language" }
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
          directory: "src/assets/images/journals",
          publicPath: "../../assets/images/journals/"
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
    posts,
    journals
  }
})
