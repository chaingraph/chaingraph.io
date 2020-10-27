import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider, theme as global_theme } from 'utils/styles'
import GlobalStyles from 'utils/styles/GlobalStyles'
import { Header, Footer } from 'components/UI'
import { Box, Flex, Text } from 'rebass'
import { GlobalContainer } from 'components/state/store'
import { globalState } from 'components/state/reducer/global-actions'

const Layout = ({ children }) => {
  const { mobile, mobileStateHandler, g_error, g_loading, userThemeHandler, user_theme } = GlobalContainer.useContainer()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={global_theme}>
      <GlobalStyles userTheme={user_theme} />
      <Header userTheme={user_theme} />
      <Box mt={6}>
        <Box as="main" maxWidth="1600px" mx="auto" px={3}>
          {children}
        </Box>
        <Footer userTheme={user_theme} />
      </Box> 
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ({ children }) => (
  <GlobalContainer.Provider
    initState={{
      ...globalState,
    }}
  >
    <Layout>
      {children}
    </Layout>
  </GlobalContainer.Provider>
)