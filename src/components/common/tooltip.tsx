import type { ReactNode } from "react"
import * as TooltipPrimitives from "~/components/ui/tooltip"

export type TooltipProps = Omit<TooltipPrimitives.RootProps, "children"> & {
  content: ReactNode
  children: ReactNode
}

export const Tooltip = ({ content, children, ...props }: TooltipProps) => (
  <TooltipPrimitives.Root openDelay={200} {...props}>
    <TooltipPrimitives.Trigger asChild>{children}</TooltipPrimitives.Trigger>
    <TooltipPrimitives.Positioner>
      <TooltipPrimitives.Arrow>
        <TooltipPrimitives.ArrowTip />
      </TooltipPrimitives.Arrow>
      <TooltipPrimitives.Content>{content}</TooltipPrimitives.Content>
    </TooltipPrimitives.Positioner>
  </TooltipPrimitives.Root>
)
