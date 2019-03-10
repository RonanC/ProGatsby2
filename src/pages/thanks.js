import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SUCCESS_IMAGE_QUERY = graphql`
  query SuccessImageQuery {
    file(relativePath: { regex: "/undraw_message_sent/" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

/**
 * The Thanks for contacting us page.
 */
const ThanksPage = ({ location }) => (
  <StaticQuery
    query={SUCCESS_IMAGE_QUERY}
    render={data => (
      <Layout location={location}>
        <SEO title="Contact Thanks" keywords={[`contact`]} />
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{
            maxWidth: '500px',
            margin: 'auto',
          }}
          alt={'thanks for getting in contact'}
        />

        <p
          style={{
            textAlign: 'center',
          }}
        >
          Thanks for getting in contact!
        </p>
      </Layout>
    )}
  />
)

export default ThanksPage
