import React from 'react'

import Layout from 'components/layout'
import { SEO } from 'components/seo'
import { Home } from 'components/home'
import { SubscriptionContainer } from 'store'
import { subscribeState } from 'store/reducer/subscription-action'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <SubscriptionContainer.Provider initState={{ ...subscribeState }}>
        <Home />
      </SubscriptionContainer.Provider>
    </Layout>
  )
}

export default IndexPage
