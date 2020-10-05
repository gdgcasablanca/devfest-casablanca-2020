import PropTypes from 'prop-types'
import React from 'react'
import Link from '../ui/link/link'

import Wrapper, { variants } from '../ui/wrapper/wrapper'

import styles from './header.module.css'

const links = [
  // {
  //   label: 'Organizers',
  //   link: '/organizers',
  // },
  // {
  //   label: 'Speakers',
  //   link: '/speakers',
  // },
  // {
  //   label: 'About us',
  //   link: '/about',
  // },
]

const Header = ({ logo }) => (
  <header className={styles.header}>
    <Wrapper variant={variants.wide}>
      <div className={styles.innerHeader}>
        {logo}
        <nav className={styles.links}>
          {links.map(({ label, link }, index) => (
            <Link href={link} key={`${label}-${index}`}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </Wrapper>
  </header>
)

Header.propTypes = {
  logo: PropTypes.node,
  links: PropTypes.node,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
