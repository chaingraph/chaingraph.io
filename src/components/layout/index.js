import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider, theme as global_theme } from 'util/styles'
import GlobalStyles from 'util/styles/GlobalStyles'
import { Header, Footer } from 'components/UI'
import { Box, Flex, Text } from 'rebass'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const THEME = localStorage.getItem('theme')
    const { matchMedia } = window

    if ((matchMedia('(prefers-color-scheme: dark)'))) {
      if (!THEME) localStorage.setItem('theme', 'dark')

      setTheme(THEME ?? 'dark');
    } else {
      if (!THEME) localStorage.setItem('theme', 'light')

      setTheme(THEME ?? 'light')
    }
  })

  return (
    <ThemeProvider theme={global_theme}>
      <GlobalStyles userTheme={theme} />
      <Header userTheme={theme} />
      <Box mt={6}>
        <Box as="main" maxWidth="1600px" mx="auto" px={3}>
          {children}
          <b>Your browser has {theme} theme active.</b>
        </Box>
        <Footer userTheme={theme} />
      </Box> 
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout