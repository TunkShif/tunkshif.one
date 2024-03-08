import { createAuth } from "@keystone-6/auth"
import { statelessSessions } from "@keystone-6/core/session"
import { env } from "./env"

// for a stateless session, a SESSION_SECRET should always be provided
// especially in production (you can generate one with 'openssl rand -base64 32')
const sessionSecret = env.SESSION_SECRET

// withAuth is a function we can use to wrap our base configuration
const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  initFirstItem: {
    fields: ["name", "email", "password"]
  },

  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: "name",
  secretField: "password"
})

// statelessSessions uses cookies for session tracking
//   these cookies have an expiry, in seconds
//   we use an expiry of 30 days for this starter
const sessionMaxAge = 60 * 60 * 24 * 14

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret
})

export { withAuth, session }
