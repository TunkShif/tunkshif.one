import { z } from "zod"

export const schema = z.union([
  z.object({
    MODE: z.literal("production"),
    PUBLIC_GITHUB_OWNER: z.string().trim().min(1),
    PUBLIC_GITHUB_REPO: z.string().trim().min(1)
  }),
  z.object({
    MODE: z.literal("development")
  })
])

export const env = schema.parse(import.meta.env)

export type Env = z.infer<typeof schema>
