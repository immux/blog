import { graphql } from 'gatsby'
import React from 'react'
import { FormattedMessage } from "gatsby-plugin-intl"

import { IndexQueryQuery } from '../../types/graphql-types'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import 'scss/index.scss'
import WhyImmux from "../components/why-immux";

interface Props {
  data: IndexQueryQuery
  location: Location
}

const BlogIndex: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta

  return (
    <Layout location={location}>
      <Meta site={meta} />
      <div className="banner">
        <div className="container hero-title-wrapper">
          <div className="hero-title">
            <FormattedMessage id="hero.title" />
          </div>
          <div className="hero-subtitle">
            <FormattedMessage id="hero.subTitle" />
          </div>
        </div>
      </div>
      <div id="why-immux" className="py-3">
        <div className="container">
          <div className="title text-center mb-3">
            <FormattedMessage id="whyImmux.title" />
          </div>
          <div className="feature-list">
            <WhyImmux />
            <div className="row">
              <div className="col-sm"></div>
              <div className="col-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
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
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
