import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {

  const headerStyle = {
    margin: `0 auto`,
    padding: `var(--space-4) var(--size-gutter)`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
  };

  const linksStyle = {
    display: 'flex',
  }

  const linkStyle = {
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
          home
        </Link>
      </div>


    </header>
  )
}

export default Header
