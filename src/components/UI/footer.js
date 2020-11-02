import React from 'react'
import { Text, Flex, Box, Image } from 'rebass'
import { GlobalContainer } from 'store'
import { SvgIcon } from './icon'

const Footer = () => {
  const { mobile, user_theme } = GlobalContainer.useContainer()

  return (
    <Box as="footer" width={1} p={3}>
      <Flex 
        justifyContent="space-between"
        flexDirection="column"
        alignItems="center"
        maxWidth="1600px"
        mx="auto"
      >
        <Box as="figure" maxWidth="820px" mb={5} width={1}>
          <SvgIcon 
            icon={mobile ?
              `chaingraph_logo-${user_theme === 'light' ? 'l' : 'd'}-footer-m` :
              `chaingraph_logo-big-${user_theme === 'light' ? 'l' : 'd'}`
            }
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
}

export default Footer
