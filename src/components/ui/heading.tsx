import { Text, type TextProps } from "./text"
import { forwardRef } from "react"

export type HeadingProps = Omit<TextProps, "variant"> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { as = "h2", ...textProps } = props
  return <Text ref={ref} as={as} variant="heading" {...textProps} />
})

Heading.displayName = "Heading"
