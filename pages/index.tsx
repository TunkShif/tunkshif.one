import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div className="mt-6 flex flex-col">
      <Head>
        <title>tunkshif.one</title>
      </Head>
      <section className="mb-6">
        <h1 className="mb-6 text-4xl font-extrabold text-gray-800 dark:text-gray-50">
          Hi, there!
        </h1>
        <p className="my-2 leading-loose text-gray-700 dark:text-gray-200">
          I&apos;m TunkShif (<em>Tristan Young </em>), currently an
          undergraduate in software engineering.
          <br />
          And I&apos;m interested in programming, building fun stuff about
          computer and web.
          <br />
          Besides, I&apos;m also a language and linguistics enthusiast.
        </p>
      </section>
      <section className="flex items-center space-x-6">
        <Link href="/post">
          <a className="rounded border-2 border-gray-600 px-3 py-1.5 font-medium text-gray-800 transition-all hover:bg-gray-600 hover:text-gray-50 dark:border-gray-200 dark:text-gray-50 dark:hover:bg-gray-200 dark:hover:text-gray-700">
            Blog
          </a>
        </Link>
        <Link href="/about">
          <a className="text-gray-800 hover:underline dark:text-gray-50">
            About
          </a>
        </Link>
      </section>
    </div>
  )
}

export default Home
