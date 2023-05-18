import React, { useState, useEffect, useRef } from "react"

import * as styles from '../styles/front.module.css'
import Logo from "./logo"
import { LogoColorsInt, RectInt } from '../model'


interface WindowSize {
  width: number;
  height: number;
}

const Front = () => {

  const frontRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    if (frontRef && frontRef.current) {
      frontRef.current.classList.add(styles.loadAnimation);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frontRef && frontRef.current) {
        frontRef.current.classList.remove(styles.loadAnimation);
      }
    }
  },[])

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,

  })

  const [logoColors, setLogoColors] = useState<LogoColorsInt>({
    skin: '#fff',
    lens: '#ffffff',
    hair: '#000',
    frame: '#000',
    shirt: '#55505c',
    trim: '#46424c',
    buttons: '#d5d5d5'
  })

  const [rects, setRects] = useState<RectInt[]>([
    {
      id: 1,
      x: 40,
      y: 40,
      width: 220,
      height: 280,
      color: '#c8c8c8'
    },
    {
      id: 2,
      x: 70,
      y: 200,
      width: 360,
      height: 230,
      color: '#ddd'
    },
    {
      id: 3,
      x: 260,
      y: 100,
      width: 200,
      height: 250,
      color: '#eee'
    },
  ])


  const handleClickPaolo = () => {
    // console.log('paolo')
    setLogoColors({
      skin: '#fff',
      lens: '#ffffff',
      hair: '#000',
      frame: '#390CAB',
      shirt: '#0C96E8',
      trim: '#0C22E8',
      buttons: '#d5d5d5'
    })
    setRects([
      {
        id: 1,
        x: 40,
        y: 40,
        width: 220,
        height: 280,
        color: '#0CE9ED'
      },
      {
        id: 2,
        x: 70,
        y: 200,
        width: 360,
        height: 230,
        color: '#88E014'
      },
      {
        id: 3,
        x: 260,
        y: 100,
        width: 200,
        height: 250,
        color: '#09E07A'
      },
    ])
  }

  const handleClickDebuque = () => {
    setLogoColors({
      skin: '#fff',
      lens: '#fff',
      hair: '#000',
      frame: '#4F08A6',
      shirt: '#C20A63',
      trim: '#7C08A6',
      buttons: '#d5d5d5'
    })
    setRects([
      {
        id: 1,
        x: 40,
        y: 40,
        width: 220,
        height: 280,
        color: '#FFDB0D'
      },
      {
        id: 2,
        x: 70,
        y: 200,
        width: 360,
        height: 230,
        color: '#FF8800'
      },
      {
        id: 3,
        x: 260,
        y: 100,
        width: 200,
        height: 250,
        color: '#FF6B0D'
      },
    ])
  }

  const handleClickCool = () => {
    setLogoColors({ ...logoColors, lens: '#07076080' })
  }

  return (
    <div ref={frontRef} className={styles.grid}>
      <div className={styles.text}>
        <h1 className={styles.header}>
          Hello! 👋🏽
          <br />
          I'm <span className={styles.paolo} onClick={handleClickPaolo}>Paolo</span> <span className={styles.debuque} onClick={handleClickDebuque}>Debuque</span>.
        </h1>
        <p className={styles.blurb}>
          I am a Filipino/Chinese-American <b>software engineer</b> and <b>musician</b> with a passion for clarity, accessibility, and beauty.
        </p>
        <p className={styles.hint}>
          {/* (hint: try clicking around on the picture --{">"}) */}
        </p>
        <div className={styles.links}>
          <a className={styles.link} href="https://github.com/pdebuque" target='_blank'>github</a> | <a className={styles.link} href="mailto:pdebuque@gmail.com">email</a> | <a className={styles.link} href="https://www.linkedin.com/in/paolo-debuque-3aa2667a/" target='_blank'>linkedin</a>
        </div>

      </div>
      <div className={styles.logoContainer}>
        <Logo
          SVGWidth={windowSize.width > 768 ? 500 : 250}
          logoColors={logoColors}
          setLogoColors={setLogoColors}
          rects={rects}
          setRects={setRects}
        /></div>
    </div>
  )
}

export default Front