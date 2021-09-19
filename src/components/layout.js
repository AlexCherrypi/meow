import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  container,
  siteTitle,
  siteIcon,
  hidden,
} from './layout.module.css'
import Navigation from './nav.js'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}
      <Link to="/">
      <StaticImage
        className={siteIcon}
        alt="Professor Amanda"
        src="../images/icon.png"
      />
      </Link>
      </header>
      <Navigation></Navigation>
      <main>
        <h1 >{pageTitle}</h1>
        {children}
      </main>
      <hr></hr>
      <Navigation></Navigation>
      <a className={hidden} rel="me" href="https://mastodon.social/@dumbcat" >Mastodon</a>
    </div>
  )
}

export default Layout
