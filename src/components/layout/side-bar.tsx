import { Presence } from "@ark-ui/react"
import { MenuIcon, MoonIcon, SunIcon, SunMoonIcon, XIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { Box, Center, Flex, HStack, Stack, styled } from "styled-system/jsx"
import { hstack, stack } from "styled-system/patterns"
import { PresetIcon } from "~/components/icon-set"
import { useRoute } from "~/components/layout/use-route"
import { IconButton } from "~/components/ui/icon-button"
import { Text } from "~/components/ui/text"
import * as ToggleGroup from "~/components/ui/toggle-group"
import { isActiveRoute } from "~/libs/helper/route"
import { useGlobalStore } from "~/libs/store"
import settings from "~/settings.json"

const navigations = settings.navigations

const nav = hstack({
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
})

export const SideBarToggleButton = () => {
  const toggleSideBar = useGlobalStore((state) => state.toggleSideBar)

  return (
    <IconButton size="sm" variant="ghost" lg={{ display: "none" }} onClick={toggleSideBar}>
      <MenuIcon />
    </IconButton>
  )
}

export const SideBarCloseButton = () => {
  const closeSideBar = useGlobalStore((state) => state.closeSideBar)
  return (
    <IconButton size="xs" variant="ghost" lg={{ display: "none" }} onClick={closeSideBar}>
      <XIcon />
    </IconButton>
  )
}

export const SideBarOverlay = () => {
  const isSideBarOpen = useGlobalStore((state) => state.isSideBarOpen)
  const closeSideBar = useGlobalStore((state) => state.closeSideBar)
  return (
    <Presence present={isSideBarOpen}>
      <Box
        position="fixed"
        inset="0"
        bg="accent.12/15"
        backdropFilter="auto"
        backdropBlur="sm"
        zIndex="overlay"
        lg={{ display: "none" }}
        onClick={closeSideBar}
      />
    </Presence>
  )
}

export const SideBar = ({ initialRoute }: { initialRoute: string }) => {
  const currentRoute = useRoute(initialRoute)
  const isSideBarOpen = useGlobalStore((state) => state.isSideBarOpen)
  return (
    <Stack
      position="absolute"
      justifyContent="space-between"
      transition="translate token(durations.fast) ease-in-out"
      translate="auto"
      translateX="-full"
      lg={{ position: "relative", translateX: "0" }}
      bg="bg.default"
      w="60"
      h="full"
      flexShrink="0"
      borderRightWidth="1"
      zIndex="modal"
      _open={{ translateX: "0" }}
      data-state={isSideBarOpen ? "open" : "closed"}
    >
      <Stack gap="2">
        <Flex
          position="relative"
          h="12"
          px="4"
          justifyContent="space-between"
          alignItems="center"
          borderBottomWidth="1"
        >
          <Text fontWeight="bold" verticalAlign="middle">
            Tristan Yang
          </Text>

          <SideBarCloseButton />
        </Flex>

        <styled.nav px="2">
          <ul className={stack({ gap: "1.5" })}>
            {navigations.map(({ name, route, icon }) => {
              return (
                <li key={name.slug}>
                  <a
                    className={nav}
                    href={route}
                    data-astro-prefetch
                    aria-current={isActiveRoute(currentRoute, route) ? "page" : undefined}
                  >
                    <PresetIcon name={icon} size="sm" transition="colors 200ms ease-in-out" />
                    <Text size="sm" fontWeight="medium">
                      {name.name}
                    </Text>
                  </a>
                </li>
              )
            })}
          </ul>
        </styled.nav>
      </Stack>

      <HStack justifyContent="end" p="2">
        <ThemeToggle />
      </HStack>
    </Stack>
  )
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system")

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setTheme(isDarkMode ? "dark" : "light")
  }, [])

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    localStorage.setItem("theme", isDark ? "dark" : "light")
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  return (
    <IconButton
      size="sm"
      variant="ghost"
      onClick={() => setTheme((theme) => (theme === "dark" ? "light" : "dark"))}
    >
      {theme === "system" && <SunMoonIcon />}
      {theme === "light" && <SunIcon />}
      {theme === "dark" && <MoonIcon />}
    </IconButton>
  )
}
