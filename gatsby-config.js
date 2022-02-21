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
                basePath: `/`,
                configPath: `src/config`,
                docsPath: `src/docs`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Xaes - Ghost Docs`,
                short_name: `Xaes - Ghost Docs`,
                start_url: `/`,
                background_color: `#0575E6`,
                display: `standalone`,
                icon: `static/favicon.png`,
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://ghost.xaes.dev`,
            },
        },
        `gatsby-plugin-remove-serviceworker`,
    ],
};
