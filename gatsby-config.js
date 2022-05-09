module.exports = {
  siteMetadata: {
    title: `Transitions2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-source-mongodb", "gatsby-plugin-sass", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-mongodb`,
    options: { dbName: `Gatsby`, collection: `sentences` },
    auth: { user: 'admin', password: 'Imissyoudaddy1!' }
  },]
};