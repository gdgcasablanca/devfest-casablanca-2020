import React, { memo, useRef, useEffect } from 'react'

import styles from './home.module.css'
import GDGDevfestLogo from '../../../assets/gdg-devfest-logo.inline.svg'

const Home = memo(function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.frame}>
        <div className={styles.frameShadow}>
          <div className={[styles.square, styles.squareRT].join(' ')} />
          <div className={[styles.square, styles.squareLT].join(' ')} />
          <div className={[styles.square, styles.squareRB].join(' ')} />
          <div className={[styles.square, styles.squareLB].join(' ')} />
        </div>
        <div className={styles.frameBar}></div>
        <div className={styles.logoWrapper}>
          <GDGDevfestLogo />
        </div>
      </div>
    </main>
  )
})

Home.propTypes = {}

export default Home
