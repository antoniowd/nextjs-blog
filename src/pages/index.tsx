import type { NextPage } from "next"
import Head from "next/head"
import { Flex, Heading } from "@chakra-ui/react"

const Home: NextPage = () => {
  return (
    <Flex h="100vh" align="center" justify="center">
      <Head>
        <title>My Blog</title>
        <meta name="description" content="My blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>Hello from my blog!</Heading>
    </Flex>
  )
}

export default Home
