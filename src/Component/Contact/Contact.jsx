import React from 'react'
import styles from "./Contact.module.css"
import mail from '../../Assets/contact/emailIcon.png';
import linkedin from '../../Assets/contact/linkedinIcon.png';
import git from '../../Assets/contact/githubIcon.png';

const Contact = () => {
  return (
   <footer className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={mail} alt="Email icon" />
        <a href="mailto:fathimanihala200214@gmail.com">fathimanihala200214@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={linkedin} alt="linkedin icon" />
        <a href="https://www.linkedin.com/in/nihaaa">linkedin.com/in/nihaaa</a>
        </li>
        <li className={styles.link}>
            <img src={git} alt="githubIcon icon" />
        <a href="https://github.com/fathima-nihala/">github.com/fathima-nihala</a>
        </li>
    </ul>
   </footer>
  )
}

export default Contact