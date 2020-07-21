import React from 'react'
import './assets/stylesheets/application.scss'

import Layout from './components/Layout'
import Hello from './components/Hello'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Copyright from './components/Copyright'

const App = () => {
  return (
      <Layout>
        <Hello />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Copyright />
      </Layout>
  )
}

export default App
