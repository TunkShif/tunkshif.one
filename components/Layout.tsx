import Head from "next/head"
import Breadcrumb from "./Breadcrumb"
import DarkModeToggle from "./DarkModeToggle"

const Layout = ({ children }: any) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 pt-8">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between mb-8">
        <Breadcrumb />
        <DarkModeToggle />
      </header>
      <main>
      {children}
      </main>
    </div>
  )
}

export default Layout
