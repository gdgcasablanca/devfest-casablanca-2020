import React, { memo, useRef, useEffect } from 'react'

import styles from './home.module.css'
import GDGDevfestLogo from '../../../assets/gdg-devfest-logo.inline.svg'

const Home = memo(function Home() {
  const frameRef = useRef()

  useEffect(() => {
    function handleMouseMove(e) {
      requestAnimationFrame(() => {
        const rectXmin = -4.8
        const rectXmax = rectXmin * -1

        const rectYmin = -3.2
        const rectYmax = 3.2

        const x = e.clientX / window.innerWidth
        const y = e.clientY / window.innerHeight

        let dx = ((rectXmax - rectXmin) * x + rectXmin) * -1
        let dy = ((rectYmax - rectYmin) * y + rectYmin) * -1

        dx = dx.toFixed(2)
        dy = dy.toFixed(2)

        frameRef.current.style.setProperty('--x', dx)
        frameRef.current.style.setProperty('--y', dy)
      })
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <main className={styles.wrapper}>
      <div className={styles.frame}>
        <div className={styles.frameShadow} ref={frameRef}>
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
