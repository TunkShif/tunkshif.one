import useMounted from "@/hooks/useMounted"
import Giscus from "@giscus/react"
import { useTheme } from "next-themes"

const Comments = () => {
  const mounted = useMounted()
  const { theme } = useTheme()
  const isDark = theme === "dark"

  if (!mounted) return null
  return (
    <section className="mt-8">
      <Giscus
        id="giscus-comments"
        repo="TunkShif/tunkshif.one"
        repoId="R_kgDOG7vTNQ"
        category="General"
        categoryId="DIC_kwDOG7vTNc4CRPRi"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={isDark ? "dark_dimmed" : "light"}
        lang="en"
        loading="lazy"
      />
    </section>
  )
}

export default Comments
