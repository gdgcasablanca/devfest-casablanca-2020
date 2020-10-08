import clsx from 'clsx'
import React, { memo } from 'react'

import Link from '../../../ui/link/link'
import Wrapper, { variants } from '../../../ui/wrapper/wrapper'
import styles from './ticket.module.css'

const Ticket = memo(function Ticket() {
  return (
    <div className={styles.ticket}>
      <Wrapper variant={variants.narrow}>
        <div className={styles.innerTicket}>
          <h2 className={clsx('h5', styles.heading)}>THIS IS A FREE EVENT</h2>
          <Link className={clsx('inverted', styles.button)} href='/tickets'>
            RSVP Here
          </Link>
        </div>
      </Wrapper>
    </div>
  )
})

export default Ticket
