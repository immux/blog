/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: "IMMUX",
    description: "Immutable computing service",
    siteUrl: "https://www.immux.com",
    author: "immux",
    adsense: "",
    keywords:
      "Block Chain, 区块链, Immutable computing, 不可变计算服务, 可回滚, Database, 数据库, Cloud Computing, 云服务",
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/posts/`,
        name: "posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/images/`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `zh-cn`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: "margin-bottom: 1.0725rem;",
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Immux",
        short_name: "Immux",
        description: "Immutable computing service",
        homepage_url: "https://www.immux.com",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#8e5821",
        display: "standalone",
        icons: [
          {
            src: "/img/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/img/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    },
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-typescript",
    "gatsby-transformer-sharp",
  ],
};
