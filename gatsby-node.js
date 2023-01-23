/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

// actions has a method to generate pages

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const {data} = await graphql(`query MyQuery {
    allMarkdownRemark{
      nodes {
        frontmatter {
          slug
          type
        }
      }
    }
  }`);

  const musicPosts = data.allMarkdownRemark.nodes.filter(node=>node.type="music");
  const blogPosts = data.allMarkdownRemark.nodes.filter(node=>node.type = "blog");
  const codePosts = data.allMarkdownRemark.nodes.filter(node=>node.type = 'code')

  blogPosts.forEach(node=>{
    actions.createPage({
      path: `/writing/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/writing-post.js'),
      context: {slug: node.frontmatter.slug}
    })
  })

  musicPosts.forEach(node=>{
    actions.createPage({
      path: `/music/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/music-post.js'),
      context: {slug: node.frontmatter.slug}
    })
  })

  codePosts.forEach(node=>{
    actions.createPage({
      path: `/code/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/code-post.js'),
      context: {slug: node.frontmatter.slug}
    })
  })



  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
