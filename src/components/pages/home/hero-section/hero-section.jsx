import React, { memo, useEffect, useRef } from 'react'
import clsx from 'clsx'

import styles from './hero-section.module.css'
import animate from '../../../ui/animate-icons.module.css'
import GDGDevfestLogo from '../../../../assets/gdg-devfest.inline.svg'
import CalendarIcon from '../../../../assets/icons/calendar.inline.svg'
import CursorIcon from '../../../../assets/icons/cursor.inline.svg'
import GibberishIcon from '../../../../assets/icons/gibberish.inline.svg'
import GlobeIcon from '../../../../assets/icons/globe.inline.svg'
import StarIcon from '../../../../assets/icons/star-1.inline.svg'
import getPosition from '../../../../utils/get-position'
import Link from '../../../ui/link/link'
import WindowCard from '../../../ui/window-card/window-card'

const HeroSection = memo(function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconsWrapper}>
        <CalendarIcon
          width='68px'
          className={clsx(animate.slow, animate.s6)}
          style={getPosition({ t: '6%', l: '36%' })}
        />
        <CursorIcon
          width='50px'
          className={clsx(animate.slow)}
          style={getPosition({ b: '30%', l: '14%' })}
        />
        <GibberishIcon
          width='185px'
          className={clsx(animate.slow, animate.s6)}
          style={getPosition({ t: '10%', l: '6%' })}
        />
        <GibberishIcon
          width='170px'
          className={clsx(animate.slow, animate.s6)}
          style={getPosition({ b: '24%', l: '68%' })}
        />
        <GlobeIcon
          width='80px'
          className={clsx(animate.slow)}
          style={getPosition({ t: '20%', r: '12%' })}
        />
        <StarIcon
          width='50px'
          className={clsx(animate.slow, styles.s3)}
          style={getPosition({ b: '40%', r: '8%' })}
        />
      </div>
      <div className={styles.content}>
        <WindowCard>
          <div className={styles.logoWrapper}>
            <GDGDevfestLogo />
          </div>
        </WindowCard>
        <Link className={clsx('inverted', styles.button)} href='/tickets'>
          More details about the event here
        </Link>
      </div>
    </div>
  )
})

export default HeroSection
