/* eslint-disable no-unused-vars */
import React from 'react'
import { GlobalContainer } from 'store'
import { Flex, Text } from 'rebass'
import { CardWrapper, CardContainer, Title, Grid, SvgIcon } from 'components/UI'
import styled, { theme } from 'utils/styles'
import { motion } from 'framer-motion'

const AnimWrapper = styled(motion.span)`
  width: 280px;
  height: 335px;
  margin: 64px auto auto;
  position: relative;
`

const Mask = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`

export function Features() {
  const { user_theme } = GlobalContainer.useContainer()

  const featuresSub =
    'ChainGraph is a network of GraphQL nodes for blockchain applications that provides state of art subscription, filtering, sorting, aggregation, pagination and search capabilities.'
  const features = [
    {
      icon: 'feat5',
      body: 'Subscriptions to real-time state and transaction data.',
    },
    {
      icon: 'feat1',
      body: 'Query from multiple blockchains in one request.',
    },
    {
      icon: 'feat2',
      body: 'Powerful developer console and explorer.',
    },
    {
      icon: 'feat7',
      body: 'Push through guarantees on RPC APIs.',
    },
    {
      icon: 'feat4',
      body: 'Semantic and principled graphql.',
    },
    {
      icon: 'feat6',
      body: 'ChainGraph CLI, dApp starters and SDKs for developers.',
    },
    {
      icon: 'feat3',
      body: 'Faster time to market. Build features not the infrastructure.',
    },
    {
      icon: 'feat8',
      body: 'No vendor lock. Diverse API providers. Open source code.',
    },
  ]

  const anim = {
    hide: {
      background: theme.colors.cards[user_theme]?.default,
      fill: theme.colors.cards[user_theme]?.color,
      clipPath: 'inset(100% 0% 0% 0%)',
      opacity: 0.75,
    },
    show: {
      background: theme.colors.cards[user_theme]?.active,
      fill: theme.colors.cards[user_theme]?.color,
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
    },
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
      <Title as="h1" fontSize={[5, 5, 5, 5, 6]} mb={[3, 4, 4, 4, 5]}>
        Features
      </Title>
      <Text
        maxWidth={1200}
        fontSize={3}
        fontWeight="light"
        lineHeight={3}
        textAlign="center"
      >
        {featuresSub}
      </Text>
      <Grid as="section">
        {features.map((f, i) => (
          <AnimWrapper initial="hide" animate="hide" whileHover="show">
            <Mask variants={anim} transition={{ duration: 0.24 }} />
            <CardWrapper key={`feature_${i + 1}`}>
              <CardContainer as="figure" height="66%" width={10 / 12} mx="auto">
                <SvgIcon icon={f.icon} logo />
              </CardContainer>
              <CardContainer height="33%" width={10 / 12} mx="auto">
                <Text as="p" textAlign="center" mx="auto" my="auto" width={1}>
                  {f.body}
                </Text>
              </CardContainer>
            </CardWrapper>
          </AnimWrapper>
        ))}
      </Grid>
    </Flex>
  ) : (
    <></>
  )
}
