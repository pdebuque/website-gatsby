import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import * as styles from '../styles/music.module.css'

export default function music({ data }) {
  console.log(data);
  const musicPosts = data.allMarkdownRemark.nodes;


  return (
    <Layout>
      <h1>Music</h1>
      <ul className={styles.musicProjectList}>
        {musicPosts.map(post=>{
          return (
            <li key = {post.id} className = {styles.listItem}>
              <h3>{post.frontmatter.title}</h3>
              <Link to={`/music/${post.frontmatter.slug}`}>see more</Link>
            </li>
          )
        })}
        <li className = {styles.listItem}>item</li>
        <li className = {styles.listItem}>item</li>
        <li className = {styles.listItem}>item</li>
        <li className = {styles.listItem}>item</li>

      </ul>
      <div>
        {musicPosts.map(post => {
          return (
            <Link key={post.id} to={`/music/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
query musicQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(music)/"}}) {
    nodes {
      frontmatter {
        slug
        title
      }
      id
    }
  }
}
`
