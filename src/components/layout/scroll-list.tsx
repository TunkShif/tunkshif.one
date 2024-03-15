import type { ReactNode } from "react"
import { css } from "styled-system/css"
import { HStack, Stack } from "styled-system/jsx"
import { SideBarToggleButton } from "~/components/layout/side-bar"
import { useScrollHandler } from "~/components/layout/use-scroll-handler"

export type ScrollListProps = {
  header: ReactNode
  children: ReactNode
}

export const ScrollList = ({ header, children }: ScrollListProps) => {
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
        {header}
      </HStack>
      {children}
    </Stack>
  )
}
