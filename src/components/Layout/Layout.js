import React from 'react'
import styles from './styles.module.scss'

import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout