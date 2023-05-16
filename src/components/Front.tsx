import React, { useState } from "react"

import * as styles from '../styles/front.module.css'
import Logo from "./logo"
import { LogoColorsInt } from '../model'



const Front = () => {



  return (
    <div className={styles.grid}>
      <div className={styles.text}>
        <h1 className={styles.header}>
          Hello! 👋🏽
          <br />
          I'm <span className={styles.paolo}>Paolo</span> <span className={styles.debuque}>Debuque</span>.
        </h1>
        <p className={styles.blurb}>
          I am a Filipino/Chinese-American <b>software engineer</b> and <b>musician</b> with a passion for clarity, accessibility, and beauty.

        </p>
        <div>
          <a className={styles.link} href="https://github.com/pdebuque" target='_blank'>github</a> | <a className={styles.link} href="mailto:pdebuque@gmail.com">email</a> | <a className={styles.link} href="https://www.linkedin.com/in/paolo-debuque-3aa2667a/" target='_blank'>linkedin</a>
        </div>

      </div>
      <div><Logo SVGWidth={500} /></div>
    </div>
  )
}

export default Front