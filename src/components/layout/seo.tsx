import Head from "next/head"

type SEOProps = {
  description?: string
  image?: string
  keywords?: string[]
  canonical?: string
}

const SEO = ({ description, keywords, image, canonical }: SEOProps) => {
  return (
    <Head>
      <meta name="description" content={description} key="desc" />
      {canonical && <link rel="canonical" href={canonical} />}
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
    </Head>
  )
}

export default SEO
