import { useState,useEffect } from 'react'
import Header from './Header'
import './App.css'
import Section from './Section'
import SkillsSection from './SkillsSection'
import HeroSection from './HeroSection'
import Projects from './Projects'
import About from './About'
import Footer from './Footer'
function App() {
  const Sections = [{id:'home',ele:<HeroSection/>},{id:'projects',ele:<Projects />},{id:'skills',ele:<SkillsSection />},{id:'about',ele:<About/>}]
  const [isActiveSection,setIsActveSection]= useState('home')

    useEffect(() => {
    // Get all sections that have an id
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        // Keep only currently visible sections
        const visibleSections = entries.filter(
          (entry) => entry.isIntersecting
        );

        if (visibleSections.length > 0) {
          // Find the visible section closest to the viewport top
          const currentSection = visibleSections.reduce(
            (closest, section) => {
              const currentDistance = Math.abs(
                section.boundingClientRect.top
              );

              const closestDistance = Math.abs(
                closest.boundingClientRect.top
              );

              return currentDistance < closestDistance
                ? section
                : closest;
            }
          );

          const id = currentSection.target.id;

          setIsActveSection(id);

          // Update URL without reloading or adding history
          window.history.replaceState(null, "", `#${id}`);
        }
      },
      {
        // Trigger when 10% of a section is visible
        threshold: 0.1,
      }
    );

    // Start observing each section
    sections.forEach((section) => observer.observe(section));

    // Stop observing on unmount
    return () => observer.disconnect();
  }, []);


  return (
    <div className="">
    <Header activeSection={isActiveSection} />
    
    
    {Sections.map((item)=><Section id={item.id} className=' min-h-screen border-4 border-[var(--border)] '>{item.ele}</Section>)}
    <Footer />
    </div>
  )
}

export default App
