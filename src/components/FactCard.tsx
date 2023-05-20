import React from 'react'

import * as styles from '../styles/factcard.module.css'

import { Fact } from '../model'

type Props = {
  fact: Fact
}

const FactCard: React.FC<Props> = (props) => {

  const {
    fact
  } = props

  return (
    <div className={styles.card}>
      <div className = {styles.header}>
        <p className = {styles.emoji}>{fact.emoji1}</p>
        <h1 className={styles.title}>
          {fact.title}
        </h1>
        <p className = {styles.emoji}>{fact.emoji2}</p>
      </div>
      <p dangerouslySetInnerHTML={{ __html: fact.text }} className={styles.text}></p>
      {/* <div className = {styles.footer}>
        <p className = {styles.emoji}>{fact.emoji2}</p>
        <p></p>
        <p className = {styles.emoji}>{fact.emoji1}</p>
      </div> */}


    </div>
  )
}

export default FactCard