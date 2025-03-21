import React from 'react'
import HeroSection from './HeroSection'
import WhyPage from './WhyPage'
import ClassGym from './ClassGym'
import ToRegistaion from './ToRegistaion'
import PricingPlan from './PricingPlan'
import ImageGym from './ImageGym'
import Team from './Team'
import GetInTouch from './GetInTouch'

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
        <div className="">
            <ImageGym />
        </div>
        <div className="">
            <Team />
        </div>
        <div className="">
            <GetInTouch />
        </div>
    </div>
  )
}

export default HomePage