module.exports = {
  siteMetadata: {
    title: 'Devfest Casablanca 2020',
    description: 'Devfest Casablanca 2020',
    author: '@gdgcasablanca',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'devfest-casablanca-2020',
        short_name: 'devfest2020',
        start_url: '/',
        background_color: '#0005df',
        theme_color: '#0005df',
        display: 'minimal-ui',
        icon: 'src/images/devfest-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-eslint-v2',
    'gatsby-plugin-prettier-eslint',
    // {
    //   resolve: ,
    //   options: {
    //     prettier: {
    //       patterns: [
    //         // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
    //         '**/*.{css,scss,less}',
    //         '**/*.{json,json5}',
    //         '**/*.{graphql}',
    //         '**/*.{md,mdx}',
    //         '**/*.{html}',
    //         '**/*.{yaml,yml}',
    //       ],
    //     },
    //     eslint: {
    //       patterns: '**/*.{js,jsx,ts,tsx}',
    //       customOptions: {
    //         fix: true,
    //         cache: true,
    //       },
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
