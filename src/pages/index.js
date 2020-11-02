import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import HomeComponent from "components/home"

const IndexPage = () => {
  
  return (
    <Layout>
      <SEO title="Home" />
      <HomeComponent />
    </Layout>
  )
}

export default IndexPage
