/* eslint-disable no-unused-vars */
import React from 'react'
import { Title, ContentWrapper } from 'components/UI'
import { Blockchain } from './blockchain'
import { Flex, Text, Box } from 'rebass'
import { Features } from './features'
import { Subscribe } from './subscribe'

export function Home() {
  const titleHero = 'one graph for all chains'
  const heroSub =
    'Blockchain real-time data without any hassle. ChainGraph provides reliable real-time graphql APIs for blockchain applications.'
  const titleSubscribe = 'Get notice when Beta App is release.'

  return (
    <React.Fragment>
      <Flex
        width={1}
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <ContentWrapper>
          <Title as="h1" fontSize={[7, 7, 7, 7, 8]} mb={[3, 4, 4, 4, 5]}>
            {titleHero}
          </Title>
          <Text
            as="p"
            fontSize={[3, 4, 4, 4, 5]}
            fontWeight="light"
            lineHeight={3}
            maxWidth={670}
          >
            {heroSub}
          </Text>
        </ContentWrapper>
        <Blockchain />
      </Flex>
      <ContentWrapper>
        <Text as="p" fontSize={[3, 4, 4, 4, 5]} fontWeight="medium" mb={4}>
          {titleSubscribe}
        </Text>
        <Subscribe />
      </ContentWrapper>
      <Features />
    </React.Fragment>
  )
}
