import clsx from 'clsx'
import React, { memo } from 'react'

import CalendarIcon from '../../../../assets/icons/calendar.inline.svg'
import CursorIcon from '../../../../assets/icons/cursor.inline.svg'
import StarIcon from '../../../../assets/icons/star-1.inline.svg'
import getPosition from '../../../../utils/get-position'
import Link from '../../../ui/link/link'
import Wrapper, { variants } from '../../../ui/wrapper/wrapper'
import styles from './ticket.module.css'
import animate from '../../../ui/animate-icons.module.css'

const Ticket = memo(function Ticket() {
  return (
    <div className={styles.ticket}>
      <Wrapper variant={variants.narrow}>
        <div className={styles.innerTicket}>
          <div style={{ color: 'var(--blue-200)' }}>
            <CalendarIcon
              width='62px'
              className={clsx(animate.slow, animate.s6)}
              style={getPosition({ t: '85%', r: '72%' })}
            />
            <CursorIcon
              width='30px'
              className={clsx(animate.slow)}
              style={getPosition({ b: '30%', r: '7%' })}
            />
            <StarIcon
              width='28px'
              className={clsx(animate.slow, styles.s3)}
              style={getPosition({ t: '-20%', l: '-5%' })}
            />
          </div>
          <h2 className={clsx('h5', styles.heading)}>THIS IS A FREE EVENT</h2>
          <Link className={clsx(styles.button)} href='/tickets'>
            More details about the event here
          </Link>
        </div>
      </Wrapper>
    </div>
  )
})

export default Ticket
