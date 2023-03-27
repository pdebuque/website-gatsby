import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from '../styles/index.module.css'
import Logo from "../components/logo"
import CodeListItem from '../components/CodeListItem'
import BlogListItem from '../components/BlogListItem'

import { codePosts } from '../content/_code';

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



const IndexPage = () => {

  const [codeBlurbShow, setCodeBlurbShow] = useState(false)

  return (

    // <Layout>
    <>
      <div className={styles.front}>
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
          Paolo Debuque
        </h1>
        <h2 style = {{fontWeight: 400}}><i>/ pow-loe de-boo-keh</i> // he/him</h2>
        <p className={styles.intro}>
          I am a musician, software engineer, and occasional writer based in Minneapolis, MN.
        </p>
      </div>
      <main>
        <div className={styles.projectContainer} id="code-container">
          <div>
            <button
              onClick={() => setCodeBlurbShow(!codeBlurbShow)}
            >expand</button>
          </div>
          <div>
            <h3>some code</h3>
          </div>
          <div style={{ display: 'grid', gridColumn: '1/-1', textAlign: 'left' }}>
            <p >some stuff i've worked on, in various stages of completion</p>
          </div>
          <div className={styles.projectList}>
            {codePosts.map((post, i) => {
              return <CodeListItem key={i} code={post} />
            })}
          </div>
        </div>

<hr/>
        <div className={styles.projectContainer} id="blog-container">
          <div><button>expand</button></div>
          <h3>some thoughts</h3>
        </div>
      </main>
    </>
    // </Layout>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
