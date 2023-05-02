import SplashText from "@/components/common/splash-text"
import Layout from "@/components/layout"

export default function AboutPage() {
  return (
    <Layout title="About">
      <header className="mb-8 mt-12">
        <SplashText>
          <h1 className="text-primary text-3xl font-bold">About Me</h1>
        </SplashText>
      </header>

      <section className="space-y-4 leading-relaxed">
        <div>
          Hi, my name is{" "}
          <SplashText>
            <span className="font-medium">Tristan Yang</span>
          </SplashText>
          , an undergraduate in Software Engineering, also a front-end web developer currently based
          in Beijing. I enjoy building fun things on the web that would make life better, and this
          is where my passion for programming comes from.
        </div>

        <div>
          Most of the time, I&apos;m writing{" "}
          <strong className="font-medium">TypeScript/JavaScript</strong> for work, and{" "}
          <strong className="font-medium">Elixir</strong> for fun. I also have previous experience
          with several languages like <strong className="font-medium">Kotlin, Java</strong> and{" "}
          <strong className="font-medium">Python</strong>. I&apos;m intrested in a wide range of
          topics about computer and programming, especially functional programming and programming
          language theory. But I&apos;m still learning right now and there&apos;s a long way to go.
        </div>

        <div>
          Outside of programming, I&apos;m also interested in linguistics and learning different
          languages. Recently, my main focus for linguistics is on morphology. Besides, I&apos;m a
          fan of various genres of music, like pop, indie and alternative music. And I enjoy
          listening to songs in very different languages, mainly in English, Spanish, Greek, Arabic,
          Turkish, Russian, Japanese, Mandarin and Cantonese.
        </div>
      </section>
    </Layout>
  )
}
