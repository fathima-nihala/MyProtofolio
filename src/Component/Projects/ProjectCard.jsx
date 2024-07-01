import React from "react";
import styles from "./ProjectCard.module.css";
import ProjectImage from "../../Assets/projects/project (1).png";

const ProjectCard = () => {
  const data = [
    {
      title: "Facebook Clone",
      imageSrc:ProjectImage ,
      description: "This is a project made to learn the latest languages by building an app.",
      skills: ["React", "Tailwind CSS"],
      demo: "https://clonefb-fathima-nihalas-projects.vercel.app/",
      source: "https://github.com/fathima-nihala/clone_fb",
    },
    {
      title: "E-Com",
      imageSrc: ProjectImage,
      description: "This is a project made to learn the latest languages by building an app.",
      skills: ["React", "Express", "Node"],
      demo: "https://www.example.com",
      source: "https://github.com/fathima-nihala/Futura/tree/main/React/MainProjects",
    },
    {
      title: "Shopper",
      imageSrc:ProjectImage,
      description: "This is a project made to learn the latest languages by building an app.",
      skills: ["React","css"],
      demo: "https://shopper-xi-rose.vercel.app/",
      source: "https://github.com/fathima-nihala/SHOPPER",
    },
  ];

  return (
    <div className={styles.container}>
      {data.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <a href={project.demo}>
            <img src={project.imageSrc} alt={`Image of ${project.title}`} className={styles.image} />
          </a>

          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <ul className={styles.skills}>
            {project.skills.map((skill, id) => (
              <li key={id} className={styles.skill}>{skill}</li>
            ))}
          </ul>
          <div className={styles.links}>

            <a href={project.source} className={styles.link}>Source</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
