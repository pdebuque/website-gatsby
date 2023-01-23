import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import CodeCard from '../components/CodeCard';

export default function code({ data }) {

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
      <h1>coding</h1>
      <p>
        Here are some recent projects.
      </p>
      {codePosts.map(post => {
        return (
          <CodeCard key={post.id} code={post} />
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
        github
        url
        description
        image
      }
      id
    }
  }
}
`
