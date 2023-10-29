import { collection, config, fields } from "@keystatic/core"

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "TunkShif",
      name: "tunkshif.one"
    }
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        created: fields.date({
          label: "Created",
          defaultValue: { kind: "today" }
        }),
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
    }),
    series: collection({
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
  }
})
