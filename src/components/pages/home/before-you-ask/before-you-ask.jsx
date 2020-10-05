import clsx from 'clsx'
import React, { memo } from 'react'
import Wrapper, { variants } from '../../../ui/wrapper/wrapper'

import styles from './before-you-ask.module.css'

const BeforeYouAsk = memo(function BeforeYouAsk() {
  return (
    <Wrapper variant={variants.wide}>
      <div className={styles.innerAsk}>
        <div className='what'>
          <h4
            className={clsx(styles.heading)}
            style={{ fontSize: '0.6rem', letterSpacing: 1.5 }}
          >
            What is DevFest?
          </h4>
          <h3 className={clsx('h4', styles.heading, styles.mainHeading)}>
            Before you ask
          </h3>

          <p>
            GDG DevFest Casablanca brings together the world class experts in
            Android, Web and Cloud technologies to Casablanca for 1 days of
            sessions, workshops and showcases.
          </p>

          <p>
            Our team creates DevFest to be the best place for experience sharing
            in a phenomenal atmosphere.
          </p>
        </div>
        <div className='info'></div>
      </div>
    </Wrapper>
  )
})

export default BeforeYouAsk
