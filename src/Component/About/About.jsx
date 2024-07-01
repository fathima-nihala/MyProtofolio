import React from 'react'
import styles from "./About.module.css";
import aboutImage from '../../Assets/About/aboutImage.png';
import cursor from '../../Assets/About/cursorIcon.png';
import server from '../../Assets/About/serverIcon.png'
import ui from '../../Assets/About/uiIcon.png';


const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={aboutImage} alt="about" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={cursor} alt="cursor icon" />
               <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p> I'm a frontend developer with experiencein building responsive and optimized sites </p>
                </div> 
                </li>
                <li  className={styles.aboutItem}><img src={server} alt="server icon" />
               <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p> I have experience developing fast and optimised back-end systems and APIs </p>
                </div> 
                </li>
                <li  className={styles.aboutItem}><img src={ui} alt="server icon" />
               <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p> I have experience developing interactive Web pages </p>
                </div> 
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
