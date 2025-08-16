import React from 'react'
import { HeroSection } from './hero/hero'
import WorkSection from './work/work'
import SkillsSection from './skills/skills'
import Projects from './project/project'

export default function Home() {
  return (
    <div className=''>
        <HeroSection/>
        <WorkSection/>
        <SkillsSection/>
        <Projects/>
        

        
      
    </div>
  )
}
