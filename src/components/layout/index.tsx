import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import Head from "next/head"
import type { ReactNode } from "react"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${title || ""}${title ? " - " : ""}tunkshif.one`}</title>
      </Head>
      <Header />
      <main className="mx-8 max-w-full lg:mx-auto lg:max-w-4xl">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
