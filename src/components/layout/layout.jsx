import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../header'
import './layout.css'

const Layout = memo(function Layout({ children, pageTitle }) {
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
    <>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <Header siteTitle={pageTitle ?? data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1140,
          width: '100%',
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </footer> */}
      </div>
    </>
  )
})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
