
import './App.css'
import Navbar from './Pages/Navbar'
import HeroSection from './Pages/HeroSection'
import SkillsSection from './Pages/SkillsSection'
import ProjectSection from './Pages/ProjectSection'
import ContactSection from './Pages/ContactSection'
import FooterSection from './Pages/FooterSection'


function App() {
  
  return (
    <div className='scroll-smooth'>
      <Navbar></Navbar>
      {/* hero section */}
      <HeroSection/>
      {/* Skills section */}
      <SkillsSection/>
      {/* Project section */}
      <ProjectSection/>
      <div className=' bg-black w-full h-4'></div>
      {/* Contact Section */}
      <ContactSection/>
      {/* footer section */}
      <FooterSection/>
    </div>
  )
}

export default App
