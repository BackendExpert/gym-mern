import React from 'react'
import HeroSection from './HeroSection'
import WhyPage from './WhyPage'
import ClassGym from './ClassGym'
import ToRegistaion from './ToRegistaion'
import PricingPlan from './PricingPlan'

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
        <div className="">
            <ToRegistaion />
        </div>
        <div className="">
            <PricingPlan />
        </div>
    </div>
  )
}

export default HomePage