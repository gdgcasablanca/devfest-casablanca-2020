import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Wrapper, { variants } from '../components/ui/wrapper/wrapper'

const NotFoundPage = () => (
  <Layout>
    <Wrapper variant={variants.wide}>
      <SEO title='404: Not found' />
      <h1 style={{ textTransform: 'uppercase' }}>Page not found</h1>
      <p>We couldn&#39;t find what you were looking for ... the sadness.</p>

      <br />

      <Link to='/'>Go back to the homepage</Link>
      <p>Or send us an email at contact[at]gdgcasablanca.com</p>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
