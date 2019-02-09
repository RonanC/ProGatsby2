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

const SocialLinksList = styled.ul`
  list-style: none;
  margin: 60px 10px 40px 0px;
  display: flex;
  justify-content: space-between;

  max-width: 300px;
  li {
    /* padding: 0 40px 0 0; */

    a {
      font-size: 25px;
      color: #4c2fc9;
    }
  }
`

class SocialLinks extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SocialDataQuery {
            site {
              siteMetadata {
                twitterHandle
                linkedInHandle
                githubHandle
                email
                mapLink
              }
            }
          }
        `}
        render={data => (
          // {metaData = data.site.siteMetadata}

          <SocialLinksList>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/${
                  data.site.siteMetadata.twitterHandle
                }`}
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.linkedin.com/in/${
                  data.site.siteMetadata.linkedInHandle
                }/`}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/${
                  data.site.siteMetadata.githubHandle
                }`}
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={data.site.siteMetadata.mapLink}
              >
                <FaGlobeAmericas />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${data.site.siteMetadata.email}`}
              >
                <FaEnvelope />
              </a>
            </li>
          </SocialLinksList>
        )}
      />
    )
  }
}

export default SocialLinks
