import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaGlobeAmericas,
  FaEnvelope,
} from 'react-icons/fa'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { Color } from '../constants'

const SOCIAL_DATA_QUERY = graphql`
  query SocialDataQuery {
    site {
      siteMetadata {
        twitterHandle
        linkedInHandle
        githubHandle
        email
      }
    }
  }
`

const SocialLinksNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    width: 250px;
    justify-content: space-between;
    margin: 0px;
    height: 30px;

    max-width: 300px;
    li {
      a {
        font-size: 25px;
        color: ${Color.ACCENT};
        transition: 0.5s;
      }

      a:hover {
        color: ${Color.ACCENT_LIGHT};
        transition: 0.3s;
      }
    }
  }
`

/**
 * A horizontal list of social, email, and map links.
 */
class SocialLinks extends React.Component {
  render() {
    return (
      <StaticQuery
        query={SOCIAL_DATA_QUERY}
        render={data => (
          <SocialLinksNav aria-label="Contact Me Links">
            <ul>
              <li>
                <OutboundLink
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://twitter.com/${data.site.siteMetadata.twitterHandle}`}
                >
                  <FaTwitter />
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.linkedin.com/in/${data.site.siteMetadata.linkedInHandle}/`}
                >
                  <FaLinkedinIn />
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://github.com/${data.site.siteMetadata.githubHandle}`}
                >
                  <FaGithub />
                </OutboundLink>
              </li>
              {/* <li>
                <OutboundLink
                  aria-label="Google Maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.site.siteMetadata.mapLink}
                >
                  <FaGlobeAmericas />
                </OutboundLink>
              </li> */}
              <li>
                <OutboundLink
                  aria-label="Email"
                  href={`mailto:${data.site.siteMetadata.email}`}
                >
                  <FaEnvelope />
                </OutboundLink>
              </li>
            </ul>
          </SocialLinksNav>
        )}
      />
    )
  }
}

export default SocialLinks
