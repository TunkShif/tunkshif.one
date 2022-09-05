import rss from "@astrojs/rss"

export const get = () =>
  rss({
    title: "tunkshif.one",
    description: "A Blog Sharing My Knowledge and Life.",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/*.md")
  })
