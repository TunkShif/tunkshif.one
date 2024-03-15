import { css } from "styled-system/css"
import { Box, HStack, Stack } from "styled-system/jsx"
import { stack } from "styled-system/patterns"
import { navLink } from "~/components/common/nav-link"
import { ScrollList } from "~/components/layout/scroll-list"
import { useRoute } from "~/components/layout/use-route"
import { Heading } from "~/components/ui/heading"
import { Text } from "~/components/ui/text"
import type { JournalGroup } from "~/libs/collections"
import { toIntlFormatDate } from "~/libs/helper/formatter"
import { isActiveRoute } from "~/libs/helper/route"

export const JournalList = ({
  initialRoute,
  initialJournals
}: {
  initialRoute: string
  initialJournals: JournalGroup[]
}) => {
  const currenRoute = useRoute(initialRoute)

  return (
    <ScrollList
      header={
        <Heading fontWeight="semibold" as="h1">
          Today I Learned
        </Heading>
      }
    >
      <Box px="2">
        <ul className={stack({ gap: "2" })}>
          {initialJournals.map(({ date, journals }) => (
            <li key={date}>
              <Stack gap="1">
                <Heading px="2" size="sm" color="fg.subtle" as="h2">
                  <time dateTime={date}>{toIntlFormatDate(new Date(date))}</time>
                </Heading>
                <ul className={stack({ gap: "1.5" })}>
                  {journals.map((journal) => (
                    <li key={journal.slug}>
                      <a
                        href={`/journals/${journal.slug}`}
                        aria-current={
                          isActiveRoute(currenRoute, `/journals/${journal.slug}`)
                            ? "page"
                            : undefined
                        }
                        className={navLink}
                      >
                        <Heading size="sm" fontWeight="medium" as="h2">
                          {journal.data.title}
                        </Heading>

                        <HStack>
                          <Text
                            size="sm"
                            color="fg.default/80"
                            _before={{
                              content: "'#'"
                            }}
                            className={css({ "[aria-current=page] &": { color: "accent.fg/85" } })}
                          >
                            {journal.data.category}
                          </Text>
                        </HStack>
                      </a>
                    </li>
                  ))}
                </ul>
              </Stack>
            </li>
          ))}
        </ul>
      </Box>
    </ScrollList>
  )
}
