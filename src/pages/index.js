import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"

const IndexPage = () => {
  
  return (
    <Layout>
      <SEO title="Home" />
      <h1>This is Home, bro <span role="img" aria-label="emoji-chan">&#x1F92D;</span></h1>
    </Layout>
  )
}

export default IndexPage
