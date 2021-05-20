import React from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from 'components/layout'
import { SEO } from 'components/seo'

function NotFoundPage() {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>{t('notFound')}</h1>
      <p>{t('notExist')}</p>
    </Layout>
  )
}

export default NotFoundPage

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
