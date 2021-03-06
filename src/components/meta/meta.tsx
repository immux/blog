import React from 'react'
import { Helmet } from 'react-helmet'

import { SiteSiteMetadata } from '../../../types/graphql-types'

interface Props {
  site:
    | Pick<
        SiteSiteMetadata,
        'title' | 'description' | 'keywords' | 'author' | 'adsense' | 'siteUrl'
      >
    | null
    | undefined
  title?: string
}

const Meta: React.FC<Props> = ({ site, title }: Props) => {
  const siteTitle = site?.title || ''
  const siteUrl = site?.siteUrl || ''
  const siteDescription = site?.description || ''
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
  return (
    <Helmet
      title={pageTitle}
      meta={[
        { property: 'og:title', content: pageTitle },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: siteDescription,
        },
        {
          property: 'og:url',
          content: `${siteUrl}/contact`,
        },
        {
          name: 'keywords',
          content: `${site?.keywords}`
        }
      ]}
    />
  )
}
export default Meta
