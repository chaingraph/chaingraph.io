/* eslint-disable no-unused-vars */
import React from 'react'
import { GlobalContainer } from 'store'
import { Box, Flex, Text } from 'rebass'
import { CardWrapper, CardContainer, Title, Grid, SvgIcon } from 'components/UI'

export function Features() {
  const { user_theme } = GlobalContainer.useContainer()

  const featuresSub =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis enim facilisis condimentum sit mus egestas. Pellentesque mollis vitae, massa vulputate viverra in faucibus. Lorem mi nisi tellus orci, lobortis. Nibh elit ultricies placerat justo, hendrerit eu egestas.'
  const features = [
    {
      icon: 'feat1',
      body: 'Read data from multiple blockchains.',
    },
    {
      icon: 'feat2',
      body: 'Mobile first optimized queries.',
    },
    {
      icon: 'feat3',
      body: 'Faster time to market.',
    },
    {
      icon: 'feat4',
      body: 'Semantic and principled graphql.',
    },
  ]

  return (
    <Flex
      as="article"
      alignItems="center"
      justifyContent="flex-start"
      flexDirection="column"
      width={1}
      mb={6}
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
            userTheme={user_theme}
            minWidth={275}
            maxWidth={335}
            height={335}
            mt={5}
            mb="auto"
            mx="auto"
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
  )
}
