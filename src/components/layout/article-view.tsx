import { ArrowLeftIcon } from "lucide-react"
import type { ReactNode } from "react"
import { css, cx } from "styled-system/css"
import { Box, HStack, Stack } from "styled-system/jsx"
import { prose } from "styled-system/recipes"
import { useScrollHandler } from "~/components/layout/use-scroll-handler"
import { Heading } from "~/components/ui/heading"
import { IconButton } from "~/components/ui/icon-button"
import { Text } from "~/components/ui/text"
import { toIntlFormatDate } from "~/libs/helper/formatter"

type Article = {
  data: {
    title: string
    category: string
    created: Date
  }
}

export const ArticleView = ({
  post,
  back,
  children
}: {
  post: Article
  back: string
  children: ReactNode
}) => {
  const { ref, handleScroll } = useScrollHandler<HTMLDivElement>({ offset: 48 })

  return (
    <Stack ref={ref} bg="bg.canvas" w="full" overflowY="auto" maxH="screen" onScroll={handleScroll}>
      <Box
        px="4"
        lg={{ px: "6" }}
        position="sticky"
        top="0"
        insetX="0"
        transition="colors {durations.slow} ease-in-out"
        className={css({
          "[data-scrolled=true] &": {
            background: "bg.default/85",
            borderBlockWidth: "1",
            backdropFilter: "auto",
            backdropBlur: "sm"
          }
        })}
      >
        <HStack minH="12" gap="2">
          <IconButton size="sm" variant="ghost" lg={{ display: "none" }} asChild>
            <a href={back}>
              <ArrowLeftIcon />
            </a>
          </IconButton>
          <Heading
            truncate
            opacity="0"
            transition="opacity {durations.slow} ease-in-out"
            className={css({ "[data-scrolled=true] &": { opacity: "1" } })}
            as="h1"
          >
            {post.data.title}
          </Heading>
        </HStack>
      </Box>

      <Box mx="auto" w="full" px="6" maxW="3xl">
        <Stack>
          <Box>
            <Text
              display="inline-block"
              fontWeight="light"
              _before={{ content: "'#'" }}
              _after={{ content: "'/'", mx: "1" }}
            >
              {post.data.category}
            </Text>
            <Text display="inline-block" fontWeight="light">
              {toIntlFormatDate(post.data.created)}
            </Text>
          </Box>
          <Heading size="3xl" fontWeight="bold" as="h1">
            {post.data.title}
          </Heading>
        </Stack>

        <article className={cx(prose(), css({ mt: "4" }))}>{children}</article>
      </Box>
    </Stack>
  )
}
