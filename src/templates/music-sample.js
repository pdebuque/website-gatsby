import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

// templates have access to query variables from the gatsby-node create page action
// e.g., context'

export default function WritingPost({ data }) {

  const {html} = data.markdownRemark;
  const {title} = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <div>
          {/* <Img fluid = {}/> */}
        </div>
        {/* text from the markdown */}
        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query musicQuery($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      slug
      stack
      title
    }
    html
  }
}`