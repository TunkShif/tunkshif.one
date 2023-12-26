import { component, defineMarkdocConfig } from "@astrojs/markdoc/config"
import shiki from "@astrojs/markdoc/shiki"

const tags = {
  playground: {
    render: component("./src/components/playground.astro"),
    attributes: {
      template: {
        type: String
      },
      files: {
        type: Array
      },
      dependencies: {
        type: Array
      }
    }
  }
}

export default defineMarkdocConfig({
  tags,
  extends: [
    shiki({
      theme: "one-dark-pro",
      wrap: false
    })
  ]
})
