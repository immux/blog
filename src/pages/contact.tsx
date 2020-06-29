import { graphql } from 'gatsby'
import React from 'react'

import { ContactPageQueryQuery } from '../../types/graphql-types'
import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import EmailSubscription from '../components/subscription'

interface Props {
  data: ContactPageQueryQuery
  location: Location
}

const Contact: React.FC<Props> = ({ location, data }: Props) => {

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Contact" />
      <div>
        <section className="text-center">
          <div className="container">
            <EmailSubscription />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.955367288289!2d114.18322241505285!3d22.279680485334293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040056a0da2f7f%3A0x11412a271f9c50b4!2z6aaZ5riv6YqF6ZG854Gj5oCh5ZKM6KGXMjgtMzDomZ_mgZLnlJ_pk5zplKPmub7lpKfljqY!5e0!3m2!1szh-CN!2sca!4v1592947054756!5m2!1szh-CN!2sca"
              width="100%"
              height="450"
              frameBorder="0"
              style={{border: 0}}
              aria-hidden="false"
              tabIndex={0}
              allowFullScreen={false}
            >
            </iframe>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query ContactPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        adsense
        keywords
      }
    }
    contact: file(name: { eq: "contact" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
