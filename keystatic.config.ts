import { collection, config, fields } from "@keystatic/core"

const posts = collection({
  label: "Posts",
  slugField: "title",
  path: "src/content/posts/*",
  entryLayout: "content",
  format: { contentField: "content" },
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    created: fields.date({ label: "Created", defaultValue: { kind: "today" } }),
    tags: fields.array(fields.text({ label: "Tag" }), {
      label: "Tags",
      itemLabel: (props) => props.value
    }),
    content: fields.document({
      label: "Content",
      formatting: true,
      dividers: true,
      links: true,
      images: {
        directory: "src/assets/images/posts",
        publicPath: "../../assets/images/posts/"
      },
      tables: true
    })
  }
})

const series = collection({
  label: "Series",
  slugField: "title",
  path: "src/content/series/*",
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    posts: fields.array(
      fields.relationship({
        label: "Post",
        collection: "posts",
        validation: {
          isRequired: true
        }
      }),
      {
        label: "Posts",
        itemLabel: (props) => props.value ?? "Please select a post"
      }
    )
  }
})

const iconOptions = ["react", "elixir"].map((value) => ({ label: value, value }))

const projects = collection({
  label: "Projects",
  slugField: "title",
  path: "src/content/projects/*",
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    description: fields.text({ label: "Description", multiline: true }),
    icons: fields.multiselect({ label: "Icons", options: iconOptions }),
    website: fields.url({ label: "Website URL" }),
    github: fields.url({ label: "GitHub URL" }),
    pinned: fields.checkbox({ label: "Pinned", defaultValue: false }),
    created: fields.date({ label: "Created", defaultValue: { kind: "today" } })
  }
})

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "TunkShif",
      name: "tunkshif.one"
    }
  },
  collections: {
    posts,
    series,
    projects
  }
})
