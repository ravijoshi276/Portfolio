import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Header'
import './App.css'
import Section from './Section'
import HeroSection from './HeroSection'
import Projects from './Projects'


function App() {
  const Sections = [{id:'home',ele:<HeroSection/>},{id:'projects',ele:<Projects />},{id:'skills',ele:""},{id:'about',ele:""}]
  const [isActiveSection,setIsActveSection]= useState('home')
 useEffect(() => {
  // Watch sections and detect which one is most visible
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        // Keep only sections currently visible
        .filter((entry) => entry.isIntersecting)
        // Pick the section with the highest visibility
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visibleSection) {
        const id = visibleSection.target.id

        // Store active section for navbar styling
        setIsActveSection(id)

        // Update URL hash without reloading or adding history
        window.history.replaceState(null, '', `#${id}`)
      }
    },
    {
      // Check visibility at 25%, 50%, and 75%
      threshold: [0.25, 0.5, 0.75],
    }
  )

  // Find all sections that have an ID
  const sections = document.querySelectorAll('section[id]')

  // Start observing each section
  sections.forEach((section) => observer.observe(section))

  // Stop observing when component unmounts
  // Cleanup
  return () => observer.disconnect()
}, [])


  return (
    <div className="">
    <Header activeSection={isActiveSection} />
    
    
    {Sections.map((item)=><Section id={item.id} className=' min-h-[100vh] border-4 border-[var(--border)] '>{item.ele}</Section>)}
    </div>
  )
}

export default App
