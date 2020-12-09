module.exports = {
  siteMetadata: {
    siteTitle: `Xaes - Ghost Docs`,
    defaultTitle: `Xaes - Ghost Docs`,
    siteTitleShort: `Xaes - Ghost Docs`,
    siteDescription: ``,
    siteUrl: `https://ghost.xaes.dev`,
    siteAuthor: `Diego Balmaceda`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#0575E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
