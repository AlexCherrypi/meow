
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hello OwO</p>
      <p>What are you doing here?</p>
      <StaticImage
        alt="Amy judging you :)"
        src="../images/meow_close.jpg"
      />
    </Layout>
  )
}

export default IndexPage