import Head from "next/head"
import { Error } from "../components"

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - tunkshif.one</title>
      </Head>
      <Error>
        <p>404 Not Found</p>
        <p>This page could not be found.</p>
      </Error>
    </>
  )
}

export default Custom404
