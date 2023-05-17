import React, { useState } from 'react'


import githubMark from '../images/github-mark/github-mark-white.png';

import * as styles from '../styles/codecard.module.css'

interface Props {
  image: string;
  blurb: string;
  deploy: string;
  name: string;
  github: string;
  technologies: string[]
}

const CodeCard: FC<Props> = (props) => {
  const {
    image,
    blurb,
    deploy,
    name,
    github,
    technologies } = props


  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className = {styles.cardContainer}>
    <a className = {styles.link} href={deploy} target='_blank'>
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
              {blurb}
            </p>
            <div className={styles.techList}>
              {technologies?.map((tech: string, i:number) => {
                return (
                  <code key = {i}>{tech}</code>
                )
              })}
            </div>
            <a href={github} target='_blank'>
              <img width={30} color='white' src={githubMark} alt="link to github" />
            </a>
          </div>}
      </div>
    </a>
    </div>
  )
}

export default CodeCard