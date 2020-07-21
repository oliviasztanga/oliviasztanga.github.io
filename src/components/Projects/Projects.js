import React from 'react'
import classnames from 'classnames'
import { generateHeading, generateScrollBtn, openInNewTab } from '../../utilities/misc'
import { featuredProjects } from '../../assets/content/projects'
import { github } from '../../assets/content/links'
import styles from './styles.module.scss'

const Projects = () => {

    return (
        <section id="projects" className={styles.projects} >
            
            { generateHeading('03', 'Projects') }

            <div className={styles.content}>

                <div className={styles.tagline}>
                    <h5 className="h--5 type--center mb-xs">
                        Check out some of my featured projects
                    </h5>
                    <h5 className="h--5 type--center mb-md">
                        or <a href={github} target="_blank" rel="noopener noreferrer" className="link" >explore more</a> of my work on GitHub
                    </h5>
                </div>
                
                {featuredProjects.map((item, idx) => {
                    const { title, mockup, github, tech } = item
                    return <div className={classnames(styles.card, `card--${idx}`)} onClick={() => openInNewTab(github)} key={idx} >
                        <h5 className="h--5 mb-xs">{title}</h5>
                        <ul>
                            {tech.map((tech, idx) => <p className={classnames(styles.tech, "type--accent")} key={idx} >{tech} </p>)}
                        </ul>
                        <img src={mockup} alt="mockup" className={styles.mockup} />
                    </div>
                })}
            </div>

            { generateScrollBtn('contact')}

        </section>
    )
}

export default Projects