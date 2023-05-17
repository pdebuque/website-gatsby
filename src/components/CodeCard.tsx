import React, { useState } from 'react'


import githubMark from '../images/github-mark/github-mark.png';

import * as styles from '../styles/codecard.module.css'

interface Props {
  image: string;
  text: string;
  deploy: string;
  name: string;
  github: string;
}

const CodeCard: FC<Props> = (props) => {
  const {
    image,
    text,
    deploy,
    name,
    github } = props


  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <a href={deploy} target='_blank'>
      <div
        className={styles.card}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ backgroundImage: `url(${image})` }}
      >
        {isHovered &&
          <div className={styles.cardText}>
            <h2 className={styles.cardTitle}>{name}</h2>
            <p className={styles.cardBlurb}>
              {text}
            </p>
            <a href={github} target='_blank'>
              <img color = 'white' src={githubMark} alt="link to github" />
            </a>
          </div>}
      </div>
    </a>
  )
}

export default CodeCard