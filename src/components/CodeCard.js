import React from 'react';
import { Card, } from '@mui/material';
import { Link } from 'gatsby';
import * as styles from '../styles/codecard.module.css'

/* 
code props will have the form: 

{
  id: 
  frontmatter: {
    slug:
    stack:
    title:
    github:
    url:
    description:
  }
}

*/



export default function CodeCard({ code }) {
  return (
    <div className = {styles.card}>
      <h3>{code.frontmatter.title}</h3>
      <p className = {styles.stack}>{code.frontmatter.stack}</p>
      <p className = {styles.description}>{code.frontmatter.description}</p>
      <a href={code.frontmatter.github}>
        <img
          alt="github logo"
          src="/Users/pdebuque/Documents/website-gatsby/src/images/github-mark/github-mark.png"
        />
      </a>
      <Link to = {`/code/${code.frontmatter.slug}`}>
        see more
      </Link>



    </div>
  )
}
