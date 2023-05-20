import React from 'react';
import Layout from '../components/layout'
import FactCard from '../components/FactCard'

import * as styles from '../styles/about.module.css'
import { Fact } from '../model'

import paoloImg from '../images/approachable-paolo.png'

const About = () => {

  const aboutFacts: Fact[] = [
    {
      title: 'Extroverted ',
      text: 'A recent and happy discovery! <p>There are few things I love more than learning about people through authentic connection.</p>',
      emoji1: '🥳',
      emoji2: '🤗',
    },
    {
      title: ' Musician ',
      text: 'I am a classically trained tenor with a masters degree in Choral Conducting from the University of Michigan. I maintain an active freelance performing career in the Twin Cities.',
      emoji1: '🎶',
      emoji2: '🎹',
    },
    {
      title: ' Systems Thinker ',
      text: 'I excel in synthesizing large- and small-scale processes.',
      emoji1: '🧑🏽‍💻',
      emoji2: '🤔',
    },
    {
      title: ' Tsundoku Sufferer ',
      text: '<i>tsundoku</i> is a Japanese term that translates (approximately) to \'acquiring reading materials but letting them pile up in one\'s home without reading them.\' <p> I am deeply afflicted.</p>',
      emoji1: '📚',
      emoji2: '📖',
    },
  ]



  return (
    <Layout>
      <div className={styles.about}>
        <section className={styles.front}>
          <div className={styles.frontGrid}>
            {/* <div className = {styles.paoloContainer}> */}
            <img className={styles.paolo} src={paoloImg} alt="image of Paolo" />
            {/* </div> */}
            {/* <div className = {styles.textContainer}> */}
            <div className={styles.text}>
              <h1>
                Thank you for visiting my website!
              </h1>

              <h3>
                I hope it's given you a satisfactory peek into my work and values as a developer.
              </h3>

              <p>
                As the role of technology continues to expand in our lives, it becomes ever more important to value human-centered design and thinking.
              </p>
              <p>Questions like <i>“Who is using this?,” “How can this technology be made meaningful?,”</i> and perhaps most pressing, <i>“What could happen if we’re not careful?”</i> are always buzzing in my mind, and I find the process of answering them through developmental iteration incredibly interesting and satisfying.
              </p>
              <p>
                Please do <a href="mailto: pdebque@gmail.com" className={styles.emailLink}>reach out!</a> I always enjoy connecting with and learning from interesting people 😊
              </p>
            </div>
          </div>
          {/* </div> */}
        </section>
        <hr />
        <section className={styles.facts}>
          <h2>more about me...</h2>
          <div className={styles.factGrid}>
            {aboutFacts.map((fact, i) => {
              return (
                <FactCard
                  key={i}
                  fact={fact}
                />
              )
            })}
          </div>
        </section>

      </div>
    </Layout>
  )
}

export default About