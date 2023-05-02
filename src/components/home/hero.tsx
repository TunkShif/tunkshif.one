import SplashText from "@/components/common/splash-text"

const Hero = () => {
  return (
    <section className="mb-8 mt-12">
      <h1 className="text-primary text-5xl font-bold">
        <div className="block">Hello,</div>
        <div className="block">
          I&apos;m{" "}
          <div className="inline-block">
            <SplashText>Tristan</SplashText>
          </div>
          .
        </div>
      </h1>

      <div className="mt-6 space-y-1 font-medium leading-snug">
        <div>
          known as
          {"  "}
          <SplashText>
            <code className="text-primary text-sm before:content-['`'] after:content-['`']">
              TunkShif
            </code>
          </SplashText>
          {"  "}
          online.
        </div>
        <div>
          front-end / <span className="line-through">full-stack</span> developer.
        </div>
        <div>I like building fun stuff for the web.</div>
      </div>
    </section>
  )
}

export default Hero
