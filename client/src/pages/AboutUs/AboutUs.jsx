import React from 'react'
import HeroAboutus from './HeroAboutus'
import AboutDesc from './AboutDesc'
import WhyChooseUs from './WhyChooseUs'

const AboutUs = () => {
  return (
    <div>
      <HeroAboutus />
      <AboutDesc />
      <WhyChooseUs />

      <div className="relative bg-[url(https://wallpapercave.com/wp/wp12712645.jpg)] bg-cover bg-center min-h-40 py-16">
        <div className='absolute inset-0 bg-black opacity-90'></div>
        <div className="relative text-white xl:px-28 md:px-40 px-4 text-center">
          <h1 className="text-4xl">Join the <span className='text-orange-500'>FitFlex</span> Community</h1>
          <p className="pt-4">
            We believe that fitness should be accessible and well-organized. With <strong>FitFlex</strong>, managing your gym has never been easier. Join us and take your fitness business to the next level!
          </p>
          <p className="pt-4">🚀 Power Your Gym with FitFlex Today!</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs