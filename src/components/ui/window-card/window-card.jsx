import React, { memo } from 'react'
import PropTypes from 'prop-types'

import styles from './window-card.module.css'

const WindowCard = memo(function WindowCard({ children }) {
  return (
    <div className={styles.frame}>
      <div className={styles.frameShadow}>
        <div className={[styles.square, styles.squareRT].join(' ')} />
        <div className={[styles.square, styles.squareLT].join(' ')} />
        <div className={[styles.square, styles.squareRB].join(' ')} />
        <div className={[styles.square, styles.squareLB].join(' ')} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.frameBar} />
        <div className={styles.childrenWrapper}>{children}</div>
      </div>
    </div>
  )
})

WindowCard.propTypes = {
  children: PropTypes.node,
}

export default WindowCard
