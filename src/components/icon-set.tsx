import { ArchiveBoxIcon, CubeIcon, HomeIcon, PencilSquareIcon } from "@heroicons/react/20/solid"
import { forwardRef } from "react"
import { icon } from "styled-system/recipes"
import invariant from "tiny-invariant"
import { Icon, type IconProps } from "~/components/ui/icon"

const IconSet = {
  "hero-home": HomeIcon,
  "hero-archive-box": ArchiveBoxIcon,
  "hero-pencil-square": PencilSquareIcon,
  "hero-cube": CubeIcon
}

type IconName = keyof typeof IconSet

type PresetIconProps = Omit<IconProps, "children"> & { name: string }

export const PresetIcon = forwardRef<SVGSVGElement, PresetIconProps>(({ name, ...props }, ref) => {
  const MaybeIcon = IconSet[name as IconName]
  invariant(MaybeIcon, `Unknown icon name ${icon} in icon preset`)
  return (
    <Icon ref={ref} {...props}>
      <MaybeIcon />
    </Icon>
  )
})
