import type { InferGetStaticPropsType } from "next"
import Head from "next/head"
import { GlobeIcon } from "@heroicons/react/solid"
import { useState } from "react"
import { repository } from "../lib"

const About = ({ about }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [language, setLanguage] = useState<"en" | "zh">("en")

  const choice = (en: string, zh: string) => (language === "en" ? en : zh)

  return (
    <section>
      <Head>
        <title>About Me - tunkshif.one</title>
      </Head>
      <div className="mb-6">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-800 dark:text-gray-50">
          {choice("About Me", "关于我")}
        </h1>
        <div className="flex items-center space-x-4 text-lg text-gray-800 dark:text-gray-50">
          <span>
            <GlobeIcon className="h-6 w-6" />
          </span>
          <button
            onClick={() => setLanguage("en")}
            aria-label="switch to English"
            className="font-bold text-gray-800 dark:text-gray-50"
          >
            <span>{language === "en" ? "[EN]" : "EN"}</span>
          </button>
          <button
            onClick={() => setLanguage("zh")}
            aria-label="switch to Chinese"
            className="font-bold text-gray-800 dark:text-gray-50"
          >
            <span>{language === "zh" ? "[ZH]" : "ZH"}</span>
          </button>
        </div>
      </div>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{
          __html: choice(about.en, about.zh)
        }}
      ></article>
    </section>
  )
}

export default About

export const getStaticProps = async (_ctx: any) => {
  const about = await repository.getAbout()
  return {
    props: { about },
    revalidate: 60
  }
}
