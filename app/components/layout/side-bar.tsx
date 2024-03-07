import { NavLink } from "@remix-run/react"
import { Box, Stack, styled } from "styled-system/jsx"
import { hstack, stack } from "styled-system/patterns"
import { NAVIGATIONS } from "~/libs/config"
import { Icon } from "../ui/icon"
import { Text } from "../ui/text"

export const SideBar = () => {
  return (
    <Box bg="bg.default" w="60" h="full" minH="screen" maxH="screen" borderRightWidth="1">
      <Stack gap="4">
        <Brand />
        <Navigation />
      </Stack>
    </Box>
  )
}

const Brand = () => {
  return (
    <Box borderBottomWidth="1">
      <Text px="6" py="4" fontWeight="bold" textAlign="end" dir="rtl">
        Tristan Yang
      </Text>
    </Box>
  )
}

const Navigation = () => {
  return (
    <styled.nav px="2">
      <ul className={stack({ gap: "1.5" })}>
        {NAVIGATIONS.map(({ key, label, route, icon: NavIcon }) => (
          <li key={key}>
            <NavLink
              className={hstack({
                px: "2",
                py: "2",
                rounded: "md",
                alignItems: "center",
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
              to={route}
              prefetch="intent"
            >
              <Icon size="sm" transition="colors 200ms ease-in-out">
                <NavIcon />
              </Icon>
              <Text size="sm" fontWeight="medium">
                {label}
              </Text>
            </NavLink>
          </li>
        ))}
      </ul>
    </styled.nav>
  )
}
