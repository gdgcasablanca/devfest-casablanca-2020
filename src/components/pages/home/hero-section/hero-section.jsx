import React, { memo, useEffect, useRef } from 'react'

import styles from './hero-section.module.css'
import GDGDevfestLogo from '../../../../assets/gdg-devfest.inline.svg'
import CalendarIcon from '../../../../assets/icons/calendar.inline.svg'
import CursorIcon from '../../../../assets/icons/cursor.inline.svg'
import GibberishIcon from '../../../../assets/icons/gibberish.inline.svg'
import GlobeIcon from '../../../../assets/icons/globe.inline.svg'
import StarIcon from '../../../../assets/icons/star-1.inline.svg'
import clsx from 'clsx'

function getPosition({ t, b, r, l }) {
  return {
    position: 'absolute',
    top: t,
    left: l,
    right: r,
    bottom: b,
  }
}

const HeroSection = memo(function HeroSection() {
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
    <div className={styles.wrapper}>
      <div className={styles.iconsWrapper}>
        <CalendarIcon
          width='68px'
          className={clsx(styles.slow, styles.s6)}
          style={getPosition({ t: '6%', l: '36%' })}
        />
        <CursorIcon
          width='50px'
          className={clsx(styles.slow)}
          style={getPosition({ b: '30%', l: '14%' })}
        />
        <GibberishIcon
          width='170px'
          className={clsx(styles.slow, styles.s6)}
          style={getPosition({ t: '10%', l: '6%' })}
        />
        <GibberishIcon
          width='185px'
          className={clsx(styles.slow, styles.s6)}
          style={getPosition({ b: '24%', l: '66%' })}
        />
        <GlobeIcon
          width='80px'
          className={clsx(styles.slow)}
          style={getPosition({ t: '20%', r: '12%' })}
        />
        <StarIcon
          width='50px'
          className={clsx(styles.slow, styles.s3)}
          style={getPosition({ b: '40%', r: '8%' })}
        />
      </div>
      <div className={styles.frame}>
        <div className={styles.frameShadow} ref={frameRef}>
          <div className={[styles.square, styles.squareRT].join(' ')} />
          <div className={[styles.square, styles.squareLT].join(' ')} />
          <div className={[styles.square, styles.squareRB].join(' ')} />
          <div className={[styles.square, styles.squareLB].join(' ')} />
        </div>
        <div style={{ boxShadow: '0 0 40px 10px rgba(6, 6, 6, 0.18)' }}>
          <div className={styles.frameBar} />
          <div className={styles.logoWrapper}>
            <GDGDevfestLogo />
          </div>
        </div>
      </div>
    </div>
  )
})

export default HeroSection
