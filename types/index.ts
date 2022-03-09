export type Author = {
  avatarUrl: string
  login: string
  url: string
}

export type Comment = {
  author: Author
  body: string
  createdAt: string
  url: string
}

export type Issue = {
  id: string
  author: Author
  title: string
  body: string
  createdAt: string
  updatedAt: string
  url: string
  comments: {
    nodes: Comment[]
  }
}

export type Repository = {
  issues: {
    nodes: Issue[]
  }
}

export type FrontMatter = {
  slug: string
  tags: string[]
}
