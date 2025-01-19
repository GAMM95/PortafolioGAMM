import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Scroll from './components/scroll/Scroll'

import Home from './pages/home/Home'
// import About from './pages/about/About'
import Skills from './pages/skills/Skills'
import Projects from './pages/projects/Projects'
import Qualification from './pages/qualification/Qualification'
import Contact from './pages/contact/Contact'


// import Services from './pages/services/Services'


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        {/* <About /> */}
        <Skills />
        <Projects />
        <Qualification />
        {/* <Services /> */}

        <Contact />
      </main>

      <Footer />
      <Scroll />
    </>
  )
}

export default App