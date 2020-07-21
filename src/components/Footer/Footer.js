import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'
import { github, linkedin, email } from '../../assets/content/links'
import { generateSVG } from '../../utilities/misc'

const Footer = () => {

    return (
        <footer className={styles.footer} >
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className={classnames(styles.link, styles.icon_padding)}>
                {generateSVG("#icon-linkedin-with-circle", styles.icon)}
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className={classnames(styles.link, styles.icon_padding)}>
                {generateSVG("#icon-github-with-circle", styles.icon)}
            </a>
            <a href={email} target="_blank" rel="noopener noreferrer" className={classnames(styles.link, styles.icon_padding)}>
                {generateSVG("#icon-envelope", styles.icon)}
            </a>
        </footer>
    )
}

export default Footer
