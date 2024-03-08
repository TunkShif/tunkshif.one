import { Box, HStack } from "styled-system/jsx"
import { Heading } from "~/components/ui/heading"

export default function Posts() {
  return (
    <Box w="full">
      <Box
        w="full"
        minH="screen"
        bgImage="radial-gradient(token(colors.bg.emphasized) 1px, transparent 0)"
        bgSize="20px 20px"
        bgPosition="-19px -19px"
      >
        <Box
          position="relative"
          w="80"
          h="full"
          minH="screen"
          maxH="screen"
          bg="bg.canvas"
          borderRightWidth="1"
        >
          <Header />
          <PostList />
        </Box>
      </Box>
    </Box>
  )
}

// TODO: filters, search

const Header = () => {
  return (
    <HStack w="full" px="6" py="4">
      <Heading size="lg" fontWeight="semibold" as="h1">
        Posts
      </Heading>
    </HStack>
  )
}

const PostList = () => {
  return null
}
