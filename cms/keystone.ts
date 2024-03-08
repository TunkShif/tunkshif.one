import { config } from "@keystone-6/core"
import { session, withAuth } from "./auth"
import { env } from "./env"
import { lists } from "./schema"

export default withAuth(
  config({
    db: {
      provider: "sqlite",
      url: env.DATABASE_URL
    },
    lists,
    session
  })
)
