/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState, useEffect, useRef } from "react"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/global.css"


interface WindowSize {
  width: number;
  height: number;
}

type Props = {
  children: any,
  pageTitle: string;
  pageDescription: string;
}

const Layout: React.FC<Props> = (props) => {

  const {
    children,
    pageTitle,
    pageDescription
  } = props

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
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription}/>
      </Helmet>
      <Header siteTitle="Paolo" />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: `var(--size-content)`,
          // padding: `var(--size-gutter)`,
        }}
      >



        <main style={{

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
