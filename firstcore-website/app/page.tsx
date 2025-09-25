'use client'

import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Technology from './components/sections/Technology'
import Timeline from './components/sections/Timeline'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Technology />
      <Timeline />
      <Certifications />
      <Contact />
    </div>
  )
}