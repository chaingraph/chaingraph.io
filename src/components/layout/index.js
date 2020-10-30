import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider, theme as global_theme } from 'utils/styles'
import GlobalStyles from 'utils/styles/GlobalStyles'
import { Header, Footer, MobileMenu, NavigationItems } from 'components/UI'
import { Box } from 'rebass'
import { GlobalContainer } from 'store'
import { globalState } from 'store/reducer/global-actions'

const Layout = ({ children }) => {
  const { user_theme } = GlobalContainer.useContainer()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [mobMenu, setMobMenu] = useState(false)
  const htmlRef = useRef(null)

  useEffect(() => {
    if (document && !htmlRef.current)
      htmlRef.current = document.querySelector('html')
    else if (document && htmlRef.current)
      htmlRef.current.style.overflowY = 'initial'

    if (mobMenu && htmlRef.current)
      htmlRef.current.style.overflowY = 'hidden'
  }, [mobMenu])

  function mobileMenuHandler() {
    setMobMenu(mm => !mm)
  }

  return (
    <ThemeProvider theme={global_theme}>
      <GlobalStyles userTheme={user_theme} />
      <Header mobileMenu={mobileMenuHandler} />
      <MobileMenu active={mobMenu} setActive={setMobMenu}>
        <NavigationItems mobile />
      </MobileMenu>
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