import type { MetaFunction } from "@remix-run/node"
import { Box, Grid, Stack } from "styled-system/jsx"
import { Heading } from "~/components/ui/heading"
import { Text, TextProps } from "~/components/ui/text"

export const meta: MetaFunction = () => {
  return [
    { title: "Tristan Yang (@TunkShif)" },
    { name: "description", content: "Web developer, language enthusiast" }
  ]
}

export default function Home() {
  return (
    <Box w="full">
      <Box minH="12">{/* TODO: mobile bar*/}</Box>

      <Box mx="auto" w="full" maxW="3xl" px="8" py="12">
        <Grid columns={12} gap="4">
          <Heading gridColumn="span 2" as="h2">
            <Text srOnly>Intro</Text>
          </Heading>
          <Stack gridColumn="span 10" gap="4">
            <Heading size="5xl" fontWeight="extrabold" as="h1">
              <Text>Hello,</Text>
              <Text>
                I'm <SplashedText as="span">Tristan</SplashedText>
              </Text>
            </Heading>
            <Stack gap="0.5">
              <Text size="lg">web developer / language enthusiast</Text>
              <Text size="lg">
                dedicated to building great things on the web platform for better life
              </Text>
            </Stack>
          </Stack>
        </Grid>
      </Box>
    </Box>
  )
}

const SplashedText = (props: TextProps) => (
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
      mixBlendMode: "darken",
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
      _after: {
        mixBlendMode: "lighten"
      }
    }}
    _osDark={{
      _after: {
        mixBlendMode: "lighten"
      }
    }}
    {...props}
  />
)
