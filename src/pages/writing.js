import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout'


export default function writing({ data }) {
  console.log(data)

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

// export page query
// this loads into data (somehow)

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