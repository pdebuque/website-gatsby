import React, { useState } from 'react'

import { CodeInt } from '../model';
// import { DateTime } from 'luxon';

// import { GatsbyImage } from 'gatsby-plugin-image';

import githubMark from '../images/github-mark/github-mark.png';

import * as styles from '../styles/codelistitem.module.css';

interface Props {
  code: CodeInt;
}

const CodeListItem = (props: Props) => {
  const { code } = props

  const [collapse, setCollapse] = useState(true);

  return (
    <>
      <div className={styles.expand_button}>
        <button onClick={() => setCollapse(!collapse)}>&nbsp;...&nbsp;</button>
      </div>
      <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <a style = {{display: 'flex', justifyContent: 'center'}} href={code.github}>
          <img src={githubMark} style={{ width: '1.2rem', height: '1.2rem' }} alt="github logo" />
        </a>
      </div>
      <div>

        <a href={code.deploy} target='_blank' style={{ textDecoration: 'none' }}>
          <span className={styles.main_link}>&nbsp;{code.name}</span></a>
      </div>
      <div>


      </div>

      <div className={styles.expand_container} style={{ display: collapse ? 'none' : '' }}>
        <p style={{ fontWeight: 200, fontSize: 14 }}>{code.blurb}</p>
        <p>technologies: {code.technologies.map(tech => {
          return <code>&nbsp;{tech}&nbsp;</code>
        }
        )}</p>
      </div>
    </>
  )
}

export default CodeListItem