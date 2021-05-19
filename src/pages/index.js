import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import { SEO } from 'components/seo'
import { Home } from 'components/home'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { SubscriptionContainer } from 'store'
import { subscribeState } from 'store/reducer/subscription-action'

function IndexPage() {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Home" lang={t('lang')} />
      <SubscriptionContainer.Provider initState={{ ...subscribeState }}>
        <Home />
      </SubscriptionContainer.Provider>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
