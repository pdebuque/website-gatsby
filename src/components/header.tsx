import * as React from "react"
import { Link } from "gatsby"

import InitialsLogo from "./InitialsLogo"
import InitialsLogoBW from "./InitialsLogoBW"

const Header = ({ siteTitle: any }) => {

  const headerStyle = {
    margin: `0 auto`,
    padding: `var(--space-4) var(--size-gutter)`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
    width: `var(--size-content)`,
    maxWidth: '1100px'
  };

  const linksStyle = {
    display: 'flex',
  }

  const linkStyle = {
    color: 'var(--color-text)',
    margin: '0 8px',
    fontSize: `var(--font-sm)`,
    textDecoration: `none`,
    fontWeight: 300,
  }

  // const links = [
  //   {
  //     name: 'about'
  //   },
  //   {
  //     name: 'music'
  //   },
  //   {
  //     name: 'code'
  //   },
  //   {
  //     name: 'writing'
  //   },
  // ]

  return (
    <header style={headerStyle}>
      {/* <Link to='/' style = {{...linkStyle, fontWeight: '400'}}>paolo debuque</Link> */}
      <div style={linksStyle}>
        {/* {links.map(link => {
          return (
            <Link
              to={`/${link.name}`}
              style={linkStyle}
            >
              {link.name}
            </Link>
          )
        })} */}
        <Link
          to="/"
          style={{ ...linkStyle, fontWeight: '700' }}
        >
          <InitialsLogoBW
            size = {60}
          />
        </Link>
        <Link
          to="/about"
          style={{ ...linkStyle, fontWeight: '700' }}
        >
          about
        </Link>


      </div>


    </header>
  )
}

export default Header
