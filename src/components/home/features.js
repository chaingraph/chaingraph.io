/* eslint-disable no-unused-vars */
import React from 'react'
import { GlobalContainer } from 'store'
import { Flex, Text } from 'rebass'
import { CardWrapper, CardContainer, Title, Grid, SvgIcon } from 'components/UI'
import styled, { theme } from 'utils/styles'
import { motion } from 'framer-motion'
import { useTranslation } from 'gatsby-plugin-react-i18next'

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
  const { t } = useTranslation()
  const featuresSub = t(
    'ChainGraph is an open source decentralized network of GraphQL API nodes for blockchain applications that provides state of art subscription, filtering, sorting, aggregation, pagination and search capabilities.',
  )
  const features = [
    {
      icon: 'feat1',
      body: t('Read data from multiple blockchains.'),
    },
    {
      icon: 'feat2',
      body: t('Mobile first optimized queries.'),
    },
    {
      icon: 'feat3',
      body: t(
        'Faster time to market. Focus on features not the infrastructure.',
      ),
    },
    {
      icon: 'feat4',
      body: t('Semantic and principled graphql.'),
    },
    {
      icon: 'feat5',
      body: t('Performant transaction data queries.'),
    },
    {
      icon: 'feat6',
      body: t('ChainGraph CLI and client app starters.'),
    },
    {
      icon: 'feat7',
      body: t('Push through guarantees on RPC APIs.'),
    },
    {
      icon: 'feat8',
      body: t('No vendor lock. Diverse API providers.'),
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
        {t('Features')}
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
          <AnimWrapper
            initial="hide"
            animate="hide"
            whileHover="show"
            key={`feature_${i + 1}`}
          >
            <Mask variants={anim} transition={{ duration: 0.24 }} />
            <CardWrapper>
              <CardContainer as="figure" height="66%" width={10 / 12} mx="auto">
                <SvgIcon icon={f.icon} logo />
              </CardContainer>
              <CardContainer height="33%" width="98%" mx="auto">
                <Text as="p" textAlign="center" mx="auto" mb="auto" width={1}>
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
