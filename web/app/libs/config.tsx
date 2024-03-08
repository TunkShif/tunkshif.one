import { ArchiveBoxIcon, CubeIcon, HomeIcon, PencilSquareIcon } from "@heroicons/react/20/solid"

export const NAVIGATIONS = [
  {
    key: "home",
    label: "Home",
    route: "/",
    icon: HomeIcon
  },
  {
    key: "posts",
    label: "Posts",
    route: "/posts",
    icon: ArchiveBoxIcon
  },
  {
    key: "journals",
    label: "Journals",
    route: "/journals",
    icon: PencilSquareIcon
  },
  {
    key: "projects",
    label: "Projects",
    route: "/projects",
    icon: CubeIcon
  }
]
