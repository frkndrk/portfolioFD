import './App.css'
import AboutMe from './components/aboutMe/AboutMe'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import CopyRight from './components/copyRight/CopyRight'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <div className="sections">
        <AboutMe />
        <Projects />
      </div>
      <Footer />
      <CopyRight />
      <Analytics />
    </>
  )
}

export default App
