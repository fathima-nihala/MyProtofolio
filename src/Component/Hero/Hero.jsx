import React from 'react'
import styles from "./Hero.module.css"
import  heero from '../../Assets/hero/heroImage.png'

const Hero = () => {

  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Fathima Nihala</h1>
        <p className={styles.description}>I'm a Mern-Stack developer with  experience using React and NodeJS.Reach out if you'd like to learn more!</p>
        <a href="mailto:fathimanihala200214@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={heero} alt="Hero Image" className={styles.heroImg} />

    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>

   </section>
  )
}

export default Hero