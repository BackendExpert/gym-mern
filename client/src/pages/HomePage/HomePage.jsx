import React from 'react'
import HeroSection from './HeroSection'
import WhyPage from './WhyPage'
import ClassGym from './ClassGym'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <div className="">
            <WhyPage />
        </div>
        <div className="">
            <ClassGym />
        </div>
    </div>
  )
}

export default HomePage