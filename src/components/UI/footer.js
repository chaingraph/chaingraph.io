import React from 'react'
import { Text, Flex, Box, Image } from 'rebass'

const Footer = ({ userTheme }) => (
  <Box as="footer" width={1} p={3}>
    <Flex 
      justifyContent="space-between"
      flexDirection="column"
      alignItems="center"
      maxWidth="1600px"
      mx="auto"
    >
      <Box as="figure" maxWidth="820px">
        <Image 
          src={`/images/chaingraph_logo_big-${userTheme === 'light' ? 'l' : 'd'}.png`}
          width={1}
        />
      </Box>
      <Text as="span"
        fontWeight="300"
        fontSize={1}
        mx="auto"
        opacity={0.75}
      >
        © {new Date().getFullYear()}, all rights reserved.
      </Text>
    </Flex>
  </Box>
)

export default Footer
