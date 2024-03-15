import { css } from "styled-system/css"
import { Box, HStack, Stack } from "styled-system/jsx"
import { stack } from "styled-system/patterns"
import { SideBarToggleButton } from "~/components/layout/side-bar"
import { useRoute } from "~/components/layout/use-route"
import { useScrollHandler } from "~/components/layout/use-scroll-handler"
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
  initialPosts: Omit<Post, "body">[]
}) => {
  const currenRoute = useRoute(initialRoute)
  const { ref, handleScroll } = useScrollHandler<HTMLDivElement>({ offset: 48 })

  return (
    <Stack
      ref={ref}
      position="relative"
      gap="2"
      w="full"
      h="full"
      lg={{ w: "80" }}
      bg="bg.canvas"
      borderRightWidth="1"
      overflowY="auto"
      onScroll={handleScroll}
    >
      <HStack
        position="sticky"
        gap="2"
        w="full"
        minH="12"
        px="2"
        lg={{ px: "4" }}
        top="0"
        insetX="0"
        className={css({
          "[data-scrolled=true] &": {
            background: "bg.default/85",
            borderBlockWidth: "1",
            backdropFilter: "auto",
            backdropBlur: "sm"
          }
        })}
      >
        <SideBarToggleButton />
        <Heading fontWeight="semibold" as="h1">
          Posts
        </Heading>
      </HStack>

      <Box px="2">
        <ul className={stack({ gap: "1.5" })}>
          {initialPosts.map((post) => (
            <li key={post.slug}>
              <a
                data-astro-prefetch
                href={`/posts/${post.slug}`}
                aria-current={
                  isActiveRoute(currenRoute, `/posts/${post.slug}`) ? "page" : undefined
                }
                className={stack({
                  px: "2",
                  py: "2",
                  gap: "2",
                  rounded: "md",
                  transition: "colors",
                  transitionDuration: "fast",
                  transitionTimingFunction: "ease-in-out",
                  _hover: { bg: "gray.4" },
                  _currentPage: {
                    bg: "accent.default",
                    color: "accent.fg",
                    _hover: { bg: "accent.default" }
                  }
                })}
              >
                <Heading size="sm" fontWeight="medium" as="h2">
                  {post.data.title}
                </Heading>

                <HStack justifyContent="space-between">
                  <Text
                    size="sm"
                    color="fg.default/80"
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
    </Stack>
  )
}
