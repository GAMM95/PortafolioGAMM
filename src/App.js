import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
/*import Services from './components/services/Services'
import Qualification from './components/qualification/Qualification'*/
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Scroll from './components/scroll/Scroll'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        {/*<Qualification />*/}
        <Skills />
        {/*<Services />*/}
        <Projects />
        <Contact />
      </main>

      <Footer />
      <Scroll />
    </>
  )
}

export default App