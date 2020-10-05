import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Link from '../ui/link/link'
import Header from '../header/header'
import Footer from '../footer/footer'
import Logo from '../../assets/devfest-cxs-2020.inline.svg'

import styles from './layout.module.css'
import './global.css'

const Layout = memo(function Layout({ children, pageTitle }) {
  return (
    <>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      {/* <Header
        logo={
          <Link href='/' className={styles.logo}>
            <Logo height='45px' />
          </Link>
        }
      /> */}

      <main>{children}</main>

      <Footer />
    </>
  )
})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
}

export default Layout
