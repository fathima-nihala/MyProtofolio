import React from 'react';
import styles from './Experience.module.css';
// import history from '../../data/history.json';
import htmlImage from '../../Assets/skills/html.png';
import css from '../../Assets/skills/css.png';
import react from '../../Assets/skills/react.png';
import node from '../../Assets/skills/node.png';
import Mongo from '../../Assets/skills/mongodb.png';
import exp from '../../Assets/skills/ex-removebg-preview.png';
import futura from '../../Assets/history/futura-labs (1) (1).png'


const Experience = () => {
    const skills = [
        {
            "title": "HTML",
            "imageSrc": htmlImage
        },
        {
            "title": "CSS",
            "imageSrc": css
        },
        {
            "title": "React",
            "imageSrc": react
        },
        {
            "title": "Node",
            "imageSrc": node
        },
        {
            "title": "MongoDB",
            "imageSrc": Mongo
        },
        {
            "title": "Express",
            "imageSrc": exp
        }
    ];

    const history = [


        {
            "role": "Junior Mern Stack Developer",
            "Company": "Code-Ox Technology",
            "startDate": "march, 2024",
            "endDate": "present",
            "experiences": [
                "Create responsive websites using React, Next.js, Tailwind css, Node.js.",
                "Other experiences..."
            ],
            "imageSrc": "https://www.code-ox.com/assets/image%201-Bjl6FTnN.png"
        },
        {
            "role": "Mern Intern",
            "Company": "Futura Labs",
            "startDate": "june, 2023",
            "endDate": "dec, 2023",
            "experiences": [
                "Create responsive websites using React and Node.js.",
                "Other experiences..."
            ],
            "imageSrc": futura
        }

    ]

    return (
        <section id='experience' className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={skill.imageSrc} alt={skill.title} width={30} height={70} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
              
                <ul className={styles.history}>
                    {history.map((historyItems, id) => {
                        return (
                            <li key={id} className={styles.historyItems}>
                                <img src={(historyItems.imageSrc)} alt={`${historyItems.Company} Logo`} />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItems.role}, ${historyItems.Company}`}</h3>
                                    <p>{`${historyItems.startDate}, ${historyItems.endDate}`}</p>
                                    <ul>
                                        {historyItems.experiences.map((experience, id) => {
                                            return <li key={id}>{experience}</li>;
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Experience;
