import Head from "next/head"
import Link from "next/link"
import Breadcrumb from "./Breadcrumb"
import DarkModeToggle from "./DarkModeToggle"

const Layout = ({ children }: any) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-8 pt-8 md:px-16 lg:px-8">
      <Head>
        <title>tunkshif.one</title>
        <meta name="description" content="TunkShif's Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="mb-8 flex items-center justify-between">
        <Breadcrumb />
        <DarkModeToggle />
      </header>
      <main>{children}</main>
      <footer className="my-8 flex flex-col items-center justify-center space-y-2 font-medium text-gray-700 dark:text-gray-200">
        <div className="flex space-x-2">
          <Link href="https://github.com/TunkShif">
            <a target="_blank" className="underline hover:no-underline">
              github
            </a>
          </Link>
          <span>•</span>
          <Link href="https://twitter.com/TunkShif">
            <a target="_blank" className="underline hover:no-underline">
              twitter
            </a>
          </Link>
        </div>
        <div>© 2022 tunkshif.one</div>
      </footer>
    </div>
  )
}

export default Layout
