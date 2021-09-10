import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

// styles

const paragraphStyles = {
  marginBottom: 48,
}

const container = {
  margin: "auto",
  "max-width": "750px",
}

const pageStyles = {
  backgroundColor: "#000000",
  color: "#FFFFFF",
  font: "1.3rem Inconsolata, monospace",
  textShadow: "0 0 5px #FFFFFFcb",
}

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const siteTitle = {
  fontSize: "3rem",
  color: "#6D6A75",
  fontWeight: "700",
  margin: "1.5rem 0 1.5rem ",
  textShadow: "0 0 5px #6d6a75cb",
}

const siteIcon = {
  float: "right",
  width: "3.5rem",
  height: "3.5rem",
}


const NotFoundPage = () => {
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
    <main style={pageStyles}>
      <title>Not found</title>
      <div style={container}>
      <header style={siteTitle}>{data.site.siteMetadata.title}
      <Link to="/" >
      <StaticImage
        style={siteIcon}
        alt="Professor Amanda"
        src="../images/icon.png"
      />
      </Link>
      </header>
      <h1>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry we couldn’t find what you were looking for :/
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
      </div>
    </main>
  )
}

export default NotFoundPage
