import React, { useState } from 'react'

import { CodeInt } from '../model';
import { DateTime } from 'luxon';

import { GatsbyImage } from 'gatsby-plugin-image';

import githubMark from '../images/github-mark/github-mark.png';

interface Props {
  code: CodeInt;
}

const CodeListItem = (props: Props) => {
  const { code } = props

  const [collapse, setCollapse] = useState(true);

  return (
    <>
      <div>
        <button onClick={() => setCollapse(!collapse)}>&nbsp;...&nbsp;</button>
      </div>
      <div>
        <code>
          {code.startDate.toFormat('LL-dd-yy')}
        </code>
      </div>
      <div>
        <a href={code.github}>
          <img src={githubMark} style = {{width: '1.5rem', height: '1.5rem'}} alt="github logo" />
        </a>
        <a href={code.deploy} target='_blank'>&nbsp;{code.name}</a>
      </div>
      <div>
        

      </div>

      <div style={{ gridColumn: '1/-1', display: collapse ? 'none' : '', margin: '1rem', borderLeft: '2px dotted grey', paddingLeft: '1rem' }}>
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