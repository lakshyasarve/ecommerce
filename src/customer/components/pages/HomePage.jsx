// import React from 'react'
import MainCarousel from './HomepageComponents/HomeCarousel/MainCarousel'
import HomeSectionCarousel from './HomepageComponents/HomeSectionCarousel/HomeSectionCarousel'
// import mens_kurta from '../../../Data/mens_kurta'
import './Homepage.css'
import AboutSectionHomepage from './HomepageComponents/AboutSectionHomepage'
import FaqSectionHomepage from './HomepageComponents/FaqSectionHomepage'
import NewsletterSectionHomepage from './HomepageComponents/NewsletterSectionHomepage'
import OurProducts from './HomepageComponents/OurProducts'
import QuizSectionHomepage from './HomepageComponents/QuizSectionHomepage'
import WhyKiah from './HomepageComponents/WhyKiah'
import MobileCarousel from './HomepageComponents/HomeCarousel/MobileCarousel'

const HomePage = () => {
  return (
    <>
    <div className='home-slider'>
    <div className='container'>
      <div className="desktop-carousel">
      <MainCarousel ></MainCarousel>
      </div>
      <div className="mobile-carousel">
      <MobileCarousel></MobileCarousel>
      </div>
      {/* <div>
        <HomeSectionCarousel></HomeSectionCarousel>
      </div>   */}

    </div>
    </div>
    <div className="container-products">
    <OurProducts></OurProducts>
    </div>
    <div className="container-why-kiah">
      <WhyKiah></WhyKiah>
    </div>
    <div className="homepage-about">
     <AboutSectionHomepage></AboutSectionHomepage>
    </div>
    <div className="homepage-quiz">
      <QuizSectionHomepage></QuizSectionHomepage>
    </div>
    <div className="homepage-faq">
      <FaqSectionHomepage></FaqSectionHomepage>
    </div>
    <div className="homepage-newsletter">
      <NewsletterSectionHomepage></NewsletterSectionHomepage>
    </div>
    </>
  )
}

export default HomePage
