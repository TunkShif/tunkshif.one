import { Text, type TextProps } from "~/components/ui/text"

export const SplashedText = (props: TextProps) => (
  <Text
    position="relative"
    _after={{
      content: "''",
      position: "absolute",
      display: "inline-block",
      bg: "gray.10/60",
      rounded: "md",
      top: "60%",
      bottom: "0.5",
      insetX: "0",
      transform: "skewX(-12deg) skewY(-2deg)",
      mixBlendMode: "var(--mix-blend-mode, darken)",
      transition: "colors",
      transitionDuration: "normal",
      transitionTimingFunction: "ease-in-out"
    }}
    _hover={{
      _after: {
        bg: "accent.default/60"
      }
    }}
    _dark={{
      "--mix-blend-mode": "lighten"
    }}
    {...props}
  />
)
