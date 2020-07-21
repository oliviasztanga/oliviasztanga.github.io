import React from 'react'
import './styles.scss'
import { scroll, openInNewTab } from '../../utilities/misc'
import resume from '../../assets/content/resume.pdf'

const toggleNav = () => {
    const toggle = document.getElementById('navi-toggle')
    toggle.checked = !toggle.checked
}

const Navbar = () => {

    return (
        <div className="navigation">
            
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    {generateNavItem('01', 'About', 'about')}
                    {generateNavItem('02', 'Experience', 'experience')}
                    {generateNavItem('03', 'Projects', 'projects')}
                    {generateNavItem('04', 'Contact', 'contact')}
                    {generateResumeLink()}
                </ul>
            </nav>
            
        </div>
    )
}

export default Navbar

const generateNavItem = (num, label, section) => {

    const handleClick = (section) => {
        scroll(section)
        toggleNav()
    }

    return (
        <li className="navigation__item">
            <div 
                className="navigation__link type--accent"
                onClick={() => handleClick(section)}
            ><span className="type--accent">{num}. </span>{label}</div>
        </li>
    )
}

const generateResumeLink = () => {

    const handleClick = () => {
        openInNewTab(resume)
        toggleNav()
    }

    return (
        <li className="navigation__item">
            <div 
                className="navigation__link type--accent"
                onClick={() => handleClick()}
            ><span className="type--accent"></span>Resume</div>
        </li>
    )
}




