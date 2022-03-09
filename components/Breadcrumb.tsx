import Link from "next/link"
import { useRouter } from "next/router"

type Path = {
  name: string
  href: string
}

type ItemProps = {
  path: Path
  hasTrailingSlash?: boolean
}

const Item = ({ path, hasTrailingSlash }: ItemProps) => {
  return (
    <>
      <li>
        <Link href={path.href} passHref>
          <a className="rounded-sm px-2.5 py-1 font-medium text-gray-500 transition-all hover:bg-gray-200 hover:bg-opacity-50 hover:text-gray-600 dark:text-gray-100 dark:hover:bg-black">
            {path.name}
          </a>
        </Link>
      </li>
      {hasTrailingSlash && <li className="select-none text-gray-400">/</li>}
    </>
  )
}

const Breadcrumb = () => {
  const router = useRouter()
  const pathnames = router.asPath.split("/").filter((it) => it !== "")
  const paths = pathnames.map(
    (name, index) =>
      ({
        name: name,
        href: "/" + pathnames.slice(0, index + 1).join("/")
      } as Path)
  )

  const count = paths.length

  return (
    <nav>
      <ol className="flex space-x-2">
        <Item path={{ name: "~", href: "/" }} hasTrailingSlash={count != 0} />
        {paths.map((path, index) => (
          <Item path={path} hasTrailingSlash={index + 1 != count} key={index} />
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
