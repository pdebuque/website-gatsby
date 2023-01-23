---
title: Gatsby, GraphQL, and Markdown
slug: gatsby-graphql-markdwon
type: blog
date: 
thumb: 
featuredImg: 
---

# Gatsby, GraphQL, and Markdown files
## explaining data flow to myself

Through gatsby, my website uses a slightly confusing set of plugins and queries to expose markdown files in `src/content` folders to itself in order to be accessed via url and displayed on the front-end. I'm going to walk myself through all the technologies and paths involved for my own clarity's sake.

This self-explanation will cover the path used for blog posts. Music and code posts are handled nearly identically.

### technologies involved
- **gatsby-source-filesystem**: plugin to source data from local filesystem 
- **gatsby-transformer-remark**: plugin to decipher markdown files and deliver them into the mesh
- **graphQL**: querying language to access Gatsby's *mesh*, a database assembled from a variety of sources, formatted via plugins.

### files involved
- gatsby-config.js
- gatsby-node.js: 
- writing.js: central repository for blog posts
- writing-post.js: template page, populated with each individual blog post
- markdown files with desired content

## overview

On build, gatsby runs `gatsby-node.js`. This script includes a `createPages` function, which makes a page for each markdown file in the graphql query, using `writing-post.js` as a template:

```js
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // this query returns all markdown files with slug (url extension) and type
  const { data } = await graphql(`query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          type
        }
      }
    }
  }`)

// extract only the blog posts
const blogPosts = data.allMarkdownRemark.nodes.filter(node=>node.type="blog");

blogPosts.forEach(node=>{
    actions.createPage({
      // url
      path: `/writing/${node.frontmatter.slug}`,
      // what template to use
      component: path.resolve('./src/templates/writing-post.js'),
      // this context allows each template page make the appropriate query to access the right markdown file
      context: {slug: node.frontmatter.slug}
    })
  })
}
```

In the meantime, the `writing.js` page (the hub from which the user will be able to view and access all writing posts) queries the graphql database and creates for each resulting object a link to the associated url:

```js
export default function writing({ data }) {

  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div>
        {posts.map(post => {
          return (
            <Link key={post.id} to={`/writing/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
          )
        })}

      </div>
    </Layout>
  )
}

// note: query is filtered to only access the blog posts
export const query = graphql`
query writingQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/"}}) {
    nodes {
      frontmatter {
        slug
        stack
        title
      }
      id
    }
  }
}
`

```

The interesting key to this whole path is that gatsby makes two nearly identical queries to the 'database': one to create and populate pre-templated pages and the other to create associated links. These actions are entirely independent of each other but both very necessary. Without the former, the website will have a bunch of links to nonexistent pages. Without the latter, the pages will exist with no front-end way to access them.