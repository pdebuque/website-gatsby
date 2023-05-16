import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from '../styles/index.module.css'
import Logo from "../components/logo"
import CodeListItem from '../components/CodeListItem'
import Front from "../components/Front"

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

    <Layout>
      {/* <> */}
      <Front />
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
        {/* <Logo /> */}
        {/* <h1 style={{ fontSize: 42, fontWeight: 400 }}>
          Paolo Debuque
        </h1>
        <h2 style={{ fontWeight: 200, fontSize: 22 }}><i>'POW-loe de-BOO-keh'</i> &nbsp;| &nbsp; he/him</h2>
        <p className={styles.intro}>
          Hello! 👋🏽
          <br />

          I am a Filipino/Chinese-American software engineer and musician with a passion for clarity, accessibility, and beauty.

          <br />
          <br />
          <span className={styles.hint}>(<b>hint:</b> try clicking around on the portrait above)</span>
        </p> */}
      </div>




      <main className={styles.main}>
        <div className={styles.projectContainer} id="code-container">
          <div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3>code</h3>
          </div>
          <div style={{ textAlign: 'left', fontWeight: 200 }}>
            <p style={{ fontSize: '15px', fontStyle: 'italic' }}>stuff i've worked on, in various stages of completion</p>
          </div>
          <div className={styles.projectList}>
            {codePosts.map((post, i) => {
              return <CodeListItem key={i} code={post} />
            })}
          </div>
        </div>

        {/* <hr />
        <div className={styles.projectContainer} id="blog-container">
          <div></div>
          <h3 style = {{display: 'flex', alignItems: 'center'}}>some thoughts</h3>
        </div> */}
      </main>

      {/* </> */}

    </Layout>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
