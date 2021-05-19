/* eslint-disable no-unused-vars */
import React from 'react'
import { Title, ContentWrapper } from 'components/UI'
import { Blockchain } from './blockchain'
import { Flex, Text, Box } from 'rebass'
import { Features } from './features'
import { Subscribe } from './subscribe'
import { useTranslation } from 'gatsby-plugin-react-i18next'

export function Home() {
  const { t } = useTranslation()
  const titleHero = t('one graph for all chains')
  const heroSub = t(
    'Blockchain real-time data without any hassle. ChainGraph provides reliable real-time graphql APIs for blockchain applications.',
  )
  const titleSubscribe = t('Get early access to the beta release.')

  return (
    <React.Fragment>
      <Flex
        width={1}
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <ContentWrapper mb={[3, 0, 0]}>
          <Title as="h1" fontSize={[6, 6, 6, 6, 7]} mb={[3, 4, 4, 4, 5]}>
            {titleHero}
          </Title>
          <Text
            as="p"
            fontSize={[2, 3, 3, 3, 4]}
            fontWeight="light"
            lineHeight={3}
            maxWidth={670}
          >
            {heroSub}
          </Text>
        </ContentWrapper>
        <Blockchain />
      </Flex>
      <ContentWrapper id="beta">
        <Text as="p" fontSize={[3, 4, 4, 4, 5]} fontWeight="medium" mb={4}>
          {titleSubscribe}
        </Text>
        <Subscribe />
      </ContentWrapper>
      <Features />
    </React.Fragment>
  )
}
