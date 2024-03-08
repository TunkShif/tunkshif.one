import "dotenv/config"
import { z } from "zod"

const schema = z.object({
  SESSION_SECRET: z.string().trim().min(1),
  DATABASE_URL: z.string().trim().min(1)
})

export const env = schema.parse(process.env)

export type Env = z.infer<typeof schema>
