import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from '../styles/index.module.css'
import Logo from "../components/logo"
import CodeListItem from '../components/CodeListItem'
import BlogListItem from '../components/BlogListItem'

import {codePosts} from '../content/_code';

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const socialLogos = [
  {
    name: 'github',
    url: 'https://github.com/pdebuque',
    logo: '',
  },
  {
    name: 'facebook',
    url: '',
    logo: '',
  }
]

const containerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '',
}


const IndexPage = () => (
  // <Layout>
  <div className={styles.textCenter}>
    {/* <StaticImage
        src="../images/paolo-face-icon.svg"
        loading="eager"
        width={200}
        quality={95}
        formats={["auto", "webp", "avif", "png"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      /> */}
    <Logo />
    <h1>
      welcome to my website
    </h1>
    <p className={styles.intro}>
      My name is Paolo Debuque.
      I am a musician, software engineer, and occasional writer based in Minneapolis, MN.
    </p>

    <div id="projects">
      <div style = {containerStyle} className='project-container' id="code-container">
        <h3>some coding projects</h3>
{codePosts.map((post,i)=>{
  return <CodeListItem key = {i} code = {post}/>
})}
      </div>


      <div className='project-container' id="blog-container">
        <h3>some thinking projects</h3>
      </div>
    </div>

  </div>

  // </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
