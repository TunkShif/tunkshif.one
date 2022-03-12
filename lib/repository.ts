import matter from "gray-matter"
import { pick, find } from "remeda"
import * as markdown from "../lib/markdown"
import { FrontMatter, Repository } from "../types"

const API_URL = "https://api.github.com/graphql"
const TOKEN = process.env["TOKEN"]
const OWNER = "TunkShif"
const REPO = "tunkshif.one"

const request = async (query: string, variables: any) => {
  const headers = {
    Authorization: `bearer ${TOKEN}`
  }
  const body = JSON.stringify({ query: query, variables })
  const response = await fetch(API_URL, { method: "POST", headers, body })
  const json = await response.json()
  return json.data.repository as Repository
}

const getPostsQuery = `
query GetPostsQuery($owner: String!, $repo: String!) {
  repository(owner: $owner, name: $repo) {
    issues(first: 100, labels: ["post"], orderBy: { field: CREATED_AT, direction: DESC }) {
      nodes {
	id,
	url,
	title,
	updatedAt,
	createdAt,
	body,
	author {
	  login,
	  url,
	  avatarUrl
	},
	comments(first: 20) {
	  nodes {
	    createdAt,
	    url,
	    author {
	      login,
	      url,
	      avatarUrl,
	    },
	    body
	  }
	}
      }
    }
  }
}`

const getAboutQuery = `
query GetAboutQuery($owner: String!, $repo: String!) {
  repository(owner: $owner, name: $repo) {
    issues(first: 2, labels: ["about"]) {
      nodes {
	id,
	title,
	body
      }
    }
  }
}`

const variables = { owner: OWNER, repo: REPO }

export const getPosts = async () => {
  const repository = await request(getPostsQuery, variables)
  const issues = repository.issues.nodes
  return Promise.all(
    issues.map(async (issue) => {
      const { content, data } = matter(issue.body)
      const comments = await Promise.all(
        issue.comments.nodes.map(async (comment) => ({
          ...comment,
          html: await markdown.render(comment.body)
        }))
      )
      return {
        ...issue,
        comments,
        frontmatter: data as FrontMatter,
        html: await markdown.render(content)
      }
    })
  )
}

export const getAbout = async () => {
  const repository = await request(getAboutQuery, variables)
  const issues = repository.issues.nodes
  const pages = await Promise.all(
    issues.map(async (issue) => ({
      ...issue,
      html: await markdown.render(issue.body)
    }))
  )
  return {
    en: find(pages, (page) => page.title === "About EN")!!.html,
    zh: find(pages, (page) => page.title === "About ZH")!!.html
  }
}

export const getTitles = () =>
  getPosts().then((posts) =>
    posts.map((post) => pick(post, ["title", "createdAt", "frontmatter"]))
  )
