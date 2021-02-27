const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            title
            images {
              localFile {
                childImageSharp {
                  fluid {
                    srcWebp
                  }
                }
              }
            }
            shopifyId
            handle
            description
            availableForSale
            priceRange {
              maxVariantPrice {
                currencyCode
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `)
  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/product/${node.handle}`,
      component: path.resolve(`./src/templates/singleProduct.js`),
      context: {
        product: node,
      },
    })
  })
}
