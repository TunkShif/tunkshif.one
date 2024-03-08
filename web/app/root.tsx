import "@fontsource-variable/figtree"
import "@fontsource/dm-mono"
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"
import { Box, Flex } from "styled-system/jsx"
import "~/index.css"
import { SideBar } from "./components/layout/side-bar"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Flex position="relative" w="full" h="full" minH="screen">
      <SideBar />
      <Box flex="1">
        <Outlet />
      </Box>
    </Flex>
  )
}
