import React from 'react';
import Layout from '../components/layout';
import {Link, graphql} from 'gatsby';

export default function code({data}) {

  const codeSamples = [
    {
      name: '',
      github_url: '',
      deployed_url: '',
      image_path: '',
      description: '',
    }
  ]

  const codePosts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      {codePosts.map(post => {
        return(
          <Link key = {post.id} to = {`/music/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
query codeQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(code)/"}}) {
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
