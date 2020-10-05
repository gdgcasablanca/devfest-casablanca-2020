import React, { memo } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import styles from './footer.module.css'
import Wrapper, { variants } from '../ui/wrapper/wrapper'
import Link from '../ui/link/link'

const footerLinks = [
  {
    title: 'About',
    links: [
      {
        label: 'GDG Casablanca',
        link: 'https://gdgcasablanca.com/',
      },
      {
        label: 'GDG Settat',
        link: 'https://gdgsettat.ma/',
      },
      {
        label: 'WTM Casablanca',
        link: 'https://wtm.gdgcasablanca.com/',
      },
      // {
      //   label: 'Code of conduct',
      //   link: '/coc',
      //   internal: true,
      // },
      {
        label: 'Google Developers Group',
        link: 'https://developers.google.com/community/gdg',
      },
      {
        label: 'Women Techmakers',
        link: 'https://www.womentechmakers.com/',
      },
    ],
  },
  {
    title: 'Past DevFests',
    links: [
      {
        label: 'DevFest Casablanca 2019',
        link: 'https://devfest-casablanca-2019.web.app/',
      },
      {
        label: 'DevFest Casablanca 2018',
        link: 'https://devfest-casablanca-2018.web.app/',
      },
      {
        label: 'DevFest Casablanca 2017',
        link: 'https://devfest17-casabanlca.web.app/',
      },
    ],
  },
  // {
  //   title: 'Social',
  //   links: [
  //     {
  //       label: 'Meetup',
  //       link: 'https://www.meetup.com/GDGCasablanca/',
  //     },
  //     {
  //       label: 'Twitter',
  //       link: 'https://twitter.com/gdgcasablanca',
  //     },
  //     {
  //       link: 'https://www.facebook.com/GDGCasa/',
  //       label: 'Facebook',
  //     },
  //     {
  //       label: 'LinkedIn',
  //       link: 'https://www.linkedin.com/company/gdgcasablanca/',
  //     },
  //   ],
  // },
  {
    title: 'Partner & Sponsor',
    links: [
      {
        label: 'contact@gdgcasablanca.com',
        link: 'mailto:contact@gdgcasablanca.com',
      },
    ],
  },
]

const Footer = memo(function Footer() {
  return (
    <footer className={styles.footer}>
      <Wrapper variant={variants.wide}>
        <h4
          className={clsx(styles.heading)}
          style={{ fontSize: '0.6rem', letterSpacing: 1.5 }}
        >
          Developer community
        </h4>
        <h3 className={clsx('h4', styles.heading, styles.mainHeading)}>
          GDG & WTM Casablanca
        </h3>

        <div className={styles.linksBlockWrapper}>
          {footerLinks.map((linksSet, index) => (
            <div className={styles.linksBlock} key={index.toString()}>
              <h5 className='h6'>{linksSet.title}</h5>
              <ul className={styles.linksList}>
                {linksSet.links.map(({ label, link, internal }, index) => (
                  <li key={index.toString()}>
                    <Link
                      className={clsx('inverted', styles.footerLink)}
                      href={link}
                      uppercase={false}
                      external={!internal}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* <hr /> */}

        <div className={styles.copy}>
          <p>
            Made with ❤️ By{' '}
            <Link
              href='https://github.com/gdgcasablanca/'
              className='inverted'
              external
            >
              GDG Casablanca
            </Link>
            ,{' '}
            <Link
              href='https://github.com/gdgcasablanca/devfest-casablanca-2020'
              className='inverted'
              external
            >
              sourced on GitHub
            </Link>
            .
          </p>
        </div>
      </Wrapper>
    </footer>
  )
})

Footer.propTypes = {}

export default Footer
