import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider, theme as global_theme } from "util/styles"
import GlobalStyles from "util/styles/GlobalStyles"
import { Header } from "components/UI"

const THEME = localStorage.getItem('theme')

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
  const [theme, setTheme] = useState(THEME ?? 'light')

  useEffect(() => {
    const { matchMedia } = window 

    if ((matchMedia('(prefers-color-scheme: dark)'))) {
      if (!theme) localStorage.setItem('theme', 'dark')

      setTheme(theme ?? 'dark');
    } else {
      if (!theme) localStorage.setItem('theme', 'light')

      setTheme(theme ?? 'light')
    }
  })

  return (
    <ThemeProvider theme={global_theme}>
      <GlobalStyles userTheme={theme} />
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1280,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>
            {children}
            <b>Your browser has {theme} theme active.</b>
          </main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout