import React from 'react'
import styles from './styles.module.scss'
import { generateScrollBtn } from '../../utilities/misc'


const Hello = () => {

    return (
        <section id="hello" className={styles.hello}>

            <h1 className="h--1 scroll-right">Hi, I'm Olivia</h1>
            <h1 className="h--1 scroll-left mb-lg">and I love to build things.</h1>
            <p>I'm a <span className="type--bold">software engineer</span> based out of <span className="type--bold">New York, NY</span>.</p>
            
            { generateScrollBtn('about') }

        </section>
    )
}

export default Hello