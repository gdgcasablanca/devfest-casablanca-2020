import { Link as GatbyLink } from 'gatsby'
import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Link = memo(function Link({ external, children, href, className }) {
  if (external) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noreferrer noopener'
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <GatbyLink to={href} className={className}>
      {children}
    </GatbyLink>
  )
})

Link.propTypes = {
  children: PropTypes.node,
  external: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string,
}

export default Link
