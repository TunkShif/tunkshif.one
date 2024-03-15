import { stack } from "styled-system/patterns"

export const navLink = stack({
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
})
