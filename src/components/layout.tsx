/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle="Paolo" />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: `var(--size-content)`,
          // padding: `var(--size-gutter)`,
        }}
      >



        <main style = {{
          
        }}>{children}</main>



        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            textAlign: 'center',
            marginBottom: `12px`
          }}
        >
          © {new Date().getFullYear()} &middot; Paolo Debuque &middot; Built with&nbsp;
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
