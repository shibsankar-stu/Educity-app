import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero/hero'
import Program from './components/programs/programs'
import Title from './components/Title/title'
import About from './components/about/about'
import Campus from './components/campus/campus'
import Testimonials from './components/testimonials/ttestimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import VideoPlayer from './components/video player/videoPlayer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle ={'Our PROGRAMS'} title = {'What we offer'}/>
        <Program/>
        <About/>
        <Title subtitle ={'Gallery'} title = {'Campus Photo'}/>
        <Campus/>
        <Title subtitle ={'TESTIMONIALS'} title = {'what Student Says'}/>
        <Testimonials/>
        <Title subtitle ={'Contact Us'} title = {'Get in Touch'}/>
        <Contact/>
      <Footer/>
      </div>
      {/* <VideoPlayer/> */}
    </>
  )
}

export default App
