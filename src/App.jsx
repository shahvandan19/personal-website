import React from 'react'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Bookshelf from './components/bookshelf/bookshelf'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Experience/>
      <Bookshelf/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App