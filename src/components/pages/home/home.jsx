import React, { memo } from 'react'
import Layout from '../../layout/layout'
import WindowCard from '../../ui/window-card/window-card'

import BeforeYouAsk from './before-you-ask/before-you-ask'
import HeroSection from './hero-section/hero-section'
import Ticket from './ticket/ticket'

// import styles from './home.module.css'

const Home = memo(function Home() {
  return (
    <Layout>
      <HeroSection />
      <BeforeYouAsk />
      <Ticket />
    </Layout>
  )
})

Home.propTypes = {}

export default Home
