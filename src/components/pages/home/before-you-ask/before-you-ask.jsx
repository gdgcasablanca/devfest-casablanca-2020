import clsx from 'clsx'
import React, { memo } from 'react'
import WindowCard from '../../../ui/window-card/window-card'
import Wrapper, { variants } from '../../../ui/wrapper/wrapper'

import styles from './before-you-ask.module.css'

const BeforeYouAsk = memo(function BeforeYouAsk() {
  return (
    <Wrapper variant={variants.wide}>
      <div className={styles.innerAsk}>
        <div className='headings'>
          <h4
            className={clsx(styles.heading)}
            style={{ fontSize: '0.6rem', letterSpacing: 1.5 }}
          >
            What is Devfest?
          </h4>
          <h3 className={clsx('h4', styles.heading, styles.mainHeading)}>
            Before you ask
          </h3>
        </div>
        <div className={styles.askBody}>
          <div className={styles.what}>
            <p>
              GDG Devfest Casablanca x Settat brings together the world class
              experts in AI/ML, Android, Web and Cloud technologies to Moroccan
              for 2 days of sessions, workshops and showcases.
            </p>

            <p>
              Our team creates Devfest to be the best place for experience
              sharing in a phenomenal atmosphere.
            </p>
          </div>
          <div className={styles.info}>
            <WindowCard>
              <p
                style={{
                  margin: 0,
                  whiteSpace: 'nowrap',
                  fontSize: '0.8em',
                }}
              >
                <strong>When</strong>
                <br />
                16 & 17 October 2020
              </p>
            </WindowCard>
            <WindowCard>
              <p
                style={{
                  margin: 0,
                  whiteSpace: 'nowrap',
                  fontSize: '0.8em',
                }}
              >
                <strong>Where</strong>
                <br />
                Live on FB & YT
              </p>
            </WindowCard>
          </div>
        </div>
      </div>
    </Wrapper>
  )
})

export default BeforeYouAsk
