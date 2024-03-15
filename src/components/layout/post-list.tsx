import { css } from "styled-system/css"
import { Box, HStack } from "styled-system/jsx"
import { stack } from "styled-system/patterns"
import { navLink } from "~/components/common/nav-link"
import { ScrollList } from "~/components/layout/scroll-list"
import { useRoute } from "~/components/layout/use-route"
import { Heading } from "~/components/ui/heading"
import { Text } from "~/components/ui/text"
import type { Post } from "~/libs/collections"
import { toIntlFormatDate } from "~/libs/helper/formatter"
import { isActiveRoute } from "~/libs/helper/route"

export const PostList = ({
  initialRoute,
  initialPosts
}: {
  initialRoute: string
  initialPosts: Post[]
}) => {
  const currenRoute = useRoute(initialRoute)

  return (
    <ScrollList
      header={
        <Heading fontWeight="semibold" as="h1">
          Posts
        </Heading>
      }
    >
      <Box px="2">
        <ul className={stack({ gap: "1.5" })}>
          {initialPosts.map((post) => (
            <li key={post.slug}>
              <a
                href={`/posts/${post.slug}`}
                aria-current={
                  isActiveRoute(currenRoute, `/posts/${post.slug}`) ? "page" : undefined
                }
                className={navLink}
              >
                <Heading size="sm" fontWeight="medium" as="h2">
                  {post.data.title}
                </Heading>

                <HStack justifyContent="space-between">
                  <Text
                    size="sm"
                    color="fg.default/80"
                    _before={{
                      content: "'#'"
                    }}
                    className={css({ "[aria-current=page] &": { color: "accent.fg/85" } })}
                  >
                    {post.data.category}
                  </Text>
                  <Text
                    size="sm"
                    color="fg.default/80"
                    dateTime={post.data.created.toISOString()}
                    as="time"
                    className={css({ "[aria-current=page] &": { color: "accent.fg/85" } })}
                  >
                    {toIntlFormatDate(post.data.created)}
                  </Text>
                </HStack>
              </a>
            </li>
          ))}
        </ul>
      </Box>
    </ScrollList>
  )
}
