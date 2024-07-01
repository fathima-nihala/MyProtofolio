import React from 'react'
import ProjectCard from './ProjectCard';
import styles from "./Project.module.css"

const Project = () => {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Project</h2>
      <div className={styles.projects}>

        <ProjectCard />

      </div>
    </section>
  )
}

export default Project