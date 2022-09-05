---
layout: ../../layouts/BlogLayout.astro
title: How to Blog
pubDate: 2022-09-03
tags: ["blog", "nextjs"]
lang: en
---

![image](https://user-images.githubusercontent.com/10807119/157442527-52a26d06-7ec9-4136-aa76-dafd8cf12422.png)

I've been thinking of a way to easily manage my blog posts, images, and comments. For traditional static site generators like [Hexo](https://hexo.io/) or [Hugo](https://gohugo.io/), all the contents are located in a local filesystem. Every time you add a new post, you'll have to manually generate the site. Or if you're using [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/) to host your blog, you'll still have to push your new posts to the repository to trigger a new build. Also, you need to turn to other approaches to managing your images and comments.

The other day, I came across the [sairin](https://github.com/djyde/sairin) project and it inspired me that I can use Github Issues as a CMS combined with the incremental static regeneration feature from [Next.js](https://nextjs.org/).

## How it Works

1. Write posts in GitHub Issue, each issue is just a blog post
2. Use GitHub API to fetch issue data, then use [remarkjs](https://github.com/remarkjs/remark) to process it, and generate blog pages at build time
3. When new posts are added, you don't have to rebuild the whole site thanks to Next.js [ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)

In this way, you can easily add a new post, upload images, and write comments in an issue.

Thanks to [sairin](https://github.com/djyde/sairin) for the great idea and [ecklf.co](https://ecklf.com/) for design inspiration.

## Markdown Test

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

### Paragraph

**Lorem ipsum** dolor sit amet, consectetur adipiscing elit. *Duis* ultrices ornare euismod. Nam ut imperdiet tortor. Sed tempus placerat lacus ac auctor. Duis euismod tristique vulputate. Fusce blandit a massa eu dignissim. Nulla laoreet felis libero, ac scelerisque velit facilisis vel. Pellentesque ornare pharetra mollis. Pellentesque at imperdiet nisl, sit amet hendrerit nunc. Nunc tincidunt lectus accumsan dui condimentum, vel suscipit est consectetur. Phasellus scelerisque posuere sapien, placerat volutpat lorem varius a. Proin fringilla in sem molestie tincidunt. Proin porttitor nunc et diam faucibus consectetur. Nullam pharetra eleifend elit, non luctus lectus accumsan et. Praesent egestas varius augue, sed euismod urna ultricies vitae.

### Quotes

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

### Tables

| Name  | Age |
| ----- | --- |
| Bob   | 27  |
| Alice | 23  |

### Code Highlighting

```elixir
send self, :hello
receive do
  msg -> IO.puts msg
after
  5000 -> IO.puts :timeout
end
```

### Lists

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

* List item
* Another item
* And another item

#### Nested list

* Item
1. First Sub-item
2. Second Sub-item

### Math

$$E=mc^2$$
