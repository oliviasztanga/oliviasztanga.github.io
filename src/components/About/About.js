import React from 'react'
import styles from './styles.module.scss'
import { generateHeading, generateScrollBtn } from '../../utilities/misc'
import headshot from '../../assets/images/headshot.png'
// import { javaScriptSkills } from '../../assets/content/skills'

const About = () => {

    return (
        <section id="about" className={styles.about}>
            
        <div className={styles.content__grid}>

            <div className={styles.content__main}>
                { generateHeading('01', 'About')}
                <div>
                    <p className="mb-sm">
                        Hi there! I'm Olivia, a <span className="type--bold">former nonprofit programs coordinator turned software engineer</span>.
                        While working at a small-budget nonprofit and doing everything from coordinating teams to modeling outcomes for reports, I developed a love for using technology to find solutions and optimize workflows on a shoestring.
                    </p>
                    <p className="mb-sm">
                        When I'm not in front of a computer, you can find me binging international television, longboarding by the beach, or solving puzzles with my third cup of coffee in hand.
                    </p>
                    {/* <p className="mb-sm">Some technologies I have been working with recently include:</p>
                    <ul className={styles.skills}>
                        { javaScriptSkills.map(item => {
                            return <li key={item} className={styles.skill}>{item}</li>
                        }) }
                    </ul> */}
                </div>
            </div>

            <div className={styles.headshot__container}>
                <img className={styles.headshot__img} src={headshot} alt="headshot" />
            </div>

        </div>

        { generateScrollBtn('experience') }

    </section>
    )
}

export default About