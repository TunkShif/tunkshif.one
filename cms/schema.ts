import { list } from "@keystone-6/core"
import { allOperations } from "@keystone-6/core/access"
import { checkbox, password, relationship, text, timestamp } from "@keystone-6/core/fields"
import { document } from "@keystone-6/fields-document"
import type { Lists } from ".keystone/types"

export type Session = {
  itemId: string
  data: {
    name: string
  }
}

const isAuthed = ({ session }: { session?: Session }) => !!session

export const lists: Lists = {
  User: list({
    access: { operation: allOperations(isAuthed) },
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique"
      }),
      password: password({ validation: { isRequired: true } }),
      createdAt: timestamp({
        defaultValue: { kind: "now" }
      }),
      posts: relationship({
        ref: "Post.author",
        many: true,
        ui: { displayMode: "count" }
      })
    }
  }),
  Post: list({
    access: { operation: allOperations(isAuthed) },
    ui: {
      labelField: "title",
      listView: {
        initialColumns: ["title", "draft", "topics", "createdAt"]
      }
    },
    fields: {
      title: text({ validation: { isRequired: true } }),
      draft: checkbox({ defaultValue: true }),
      author: relationship({
        ref: "User.posts",
        ui: {
          displayMode: "select",
          labelField: "name"
        }
      }),
      topics: relationship({
        ref: "Topic.posts",
        many: true,
        ui: {
          displayMode: "select",
          labelField: "name"
        }
      }),
      createdAt: timestamp({ defaultValue: { kind: "now" } }),
      content: document({
        formatting: true,
        links: true,
        dividers: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1]
        ]
      })
    }
  }),
  Topic: list({
    access: { operation: allOperations(isAuthed) },
    ui: {
      isHidden: true
    },
    fields: {
      name: text({ validation: { isRequired: true }, isIndexed: "unique" }),
      posts: relationship({
        ref: "Post.topics",
        many: true,
        ui: { displayMode: "count" }
      })
    }
  })
}
