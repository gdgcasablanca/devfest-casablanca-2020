import React, { memo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './wrapper.module.css'

export const variants = {
  narrow: 'narrow',
  default: 'default',
  wide: 'wide',
}
const variantsArray = Object.keys(variants)

const Wrapper = memo(function Wrapper({
  children,
  variant = variants.default,
}) {
  return (
    <div
      className={clsx(styles.wrapper, styles[variant])}
      // style={{
      //   margin: `0 auto`,
      //   maxWidth: 1140,
      //   width: '100%',
      //   padding: `1.45rem 1.0875rem`,
      // }}
    >
      {children}
    </div>
  )
})

Wrapper.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(variantsArray),
}

export default Wrapper
