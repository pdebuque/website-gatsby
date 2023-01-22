import React from 'react';
import Layout from '../components/layout';
import {graphql,Link} from 'gatsby';

export default function music({ data }) {
  console.log(data);
  const musicPosts = data.allMarkdownRemark.nodes;


  return (
    <Layout>
      {musicPosts.map(post => {
        return(
          <Link key = {post.id} to = {`/music/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
query musicQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(music)/"}}) {
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
