/* eslint-disable no-unused-vars */
import React from 'react'
import { GlobalContainer } from 'store'
import { Flex, Text } from 'rebass'
import { CardWrapper, CardContainer, Title, Grid, SvgIcon } from 'components/UI'
import { theme } from 'utils/styles'

export function Features() {
  const { user_theme } = GlobalContainer.useContainer()

  const featuresSub =
    'ChainGraph is an open source decentralized network of GraphQL API nodes for blockchain applications that provides state of art subscription, filtering, sorting, aggregation, pagination and search capabilities.'
  const features = [
    {
      icon: 'feat1',
      body: 'Read data from multiple blockchains.',
    },
    {
      icon: 'feat1',
      body: 'No vendor lock. Diverse API providers.',
    },
    {
      icon: 'feat2',
      body: 'Mobile first optimized queries.',
    },
    {
      icon: 'feat4',
      body: 'Push through guarantees on RPC APIs.',
    },
    {
      icon: 'feat4',
      body: 'Semantic and principled graphql.',
    },
    {
      icon: 'feat2',
      body: 'ChainGraph CLI and client app starters',
    },
    {
      icon: 'feat3',
      body: 'Faster time to market. Focus on features not the infrastructure.',
    },
    {
      icon: 'feat3',
      body: 'Performant transaction data queries',
    },
  ]

  const initialAnim = {
    background: theme.colors.cards[user_theme]?.default,
    color: theme.colors.cards[user_theme]?.color,
    fill: theme.colors.cards[user_theme]?.color,
  }
  const hoverAnim = {
    background: theme.colors.cards[user_theme]?.active,
    fill: theme.colors.cards[user_theme]?.color,
  }

  return user_theme ? (
    <Flex
      as="article"
      alignItems="center"
      justifyContent="flex-start"
      flexDirection="column"
      width={1}
      mb={6}
      id="features"
    >
      <Title as="h1" fontSize={[6, 6, 6, 6, 7]} mb={[3, 4, 4, 4, 5]}>
        Features
      </Title>
      <Text
        maxWidth={1200}
        fontSize={4}
        fontWeight="light"
        lineHeight={3}
        textAlign="center"
      >
        {featuresSub}
      </Text>
      <Grid as="section">
        {features.map((f, i) => (
          <CardWrapper
            key={`feature_${i + 1}`}
            whileHover={hoverAnim}
            animate={initialAnim}
            initial={initialAnim}
            style={initialAnim}
          >
            <CardContainer as="figure" height="66%" width={10 / 12} mx="auto">
              <SvgIcon icon={f.icon} logo />
            </CardContainer>
            <CardContainer height="33%" width={10 / 12} mx="auto">
              <Text as="b" textAlign="center" mx="auto" my="auto" width={1}>
                {f.body}
              </Text>
            </CardContainer>
          </CardWrapper>
        ))}
      </Grid>
    </Flex>
  ) : (
    <></>
  )
}
