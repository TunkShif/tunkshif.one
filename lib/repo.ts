import BananaSlug from "github-slugger"
import * as markdown from "../lib/markdown"
import { Issue, Repository } from "../types"

const API_URL = "https://api.github.com/graphql"
const TOKEN = process.env["TOKEN"]
const OWNER = "TunkShif"
const REPO = "tunkshif.one"

const request = async <V>(query: string, variables: any) => {
  const headers = {
    Authorization: `bearer ${TOKEN}`
  }
  const body = JSON.stringify({ query: query, variables })
  const response = await fetch(API_URL, { method: "POST", headers, body })
  const json = await response.json()
  return json.data.repository as V
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

const getTitlesQuery = `
query GetTitlesQuery($owner: String!, $repo: String!) {
  repository(owner: $owner, name: $repo) {
    issues(first: 100, labels: ["post"], orderBy: { field: CREATED_AT, direction: DESC }) {
      nodes {
	id,
	title,
	updatedAt,
	createdAt
      }
    }
  }
}
`

const variables = { owner: OWNER, repo: REPO }

export const getPosts = async () => {
  const slugger = new BananaSlug()
  const repository = await request<Repository>(getPostsQuery, variables)
  const issues = repository.issues.nodes
  return Promise.all(
    issues.map(async (issue) => ({
      ...issue,
      slug: slugger.slug(issue.title),
      html: await markdown.render(issue.body)
    }))
  )
}

export const getTitles = async () => {
  const slugger = new BananaSlug()
  const repository = await request<Repository>(getTitlesQuery, variables)
  const issues: Pick<Issue, "id" | "title" | "updatedAt" | "createdAt">[] =
    repository.issues.nodes
  return issues.map((issue) => ({ ...issue, slug: slugger.slug(issue.title) }))
}
