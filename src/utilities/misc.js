import React from 'react'
import sprite from '../assets/images/sprites.svg'

export const openInNewTab = (url) => window.open(url, '_blank')

export const scroll = (section) => {
    document
        .getElementById(section)
        .scrollIntoView({behavior:'smooth'})
}

export const generateSVG = (extension, classname = {}) => {
    return (
        <svg className={classname}>
            <use xlinkHref={sprite + extension}></use>
        </svg>
    )
}

export const generateScrollBtn = (location) => {
    return (
        <button 
            className="btn-scroll" 
            onClick={() => scroll(location)}
        >
            { generateSVG('#icon-chevron-down') }
        </button>
    )
}

export const generateHeading = (num, title) => {
    return <h2 className="h--2"><span className="h--num">{num}. </span>{title}</h2>
}
