import './App.css'
import AboutMe from './components/aboutMe/AboutMe'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import CopyRight from './components/copyRight/CopyRight'

function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <AboutMe />
      <Projects/>
      <Footer />
      <CopyRight />
    </>
  )
}

export default App
