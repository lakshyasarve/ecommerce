import React from 'react'
import './About.css'
import NewsletterSectionHomepage from './HomepageComponents/NewsletterSectionHomepage'

const About = () => {
  return (
    <div className='container'>
      <div className="our-story">
      <div className="split-container-child-1">

      </div>
      <div className="split-container-child-2">
        <p className="about-ourstory-heading">Our Story</p>
        <p className="about-ourstory-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et maecenas accumsan lacus vel facilisis. </p>
        </div>
      </div>

      <div className="startup-india">
        <div className="split-container-child-1">
        <p className="about-startupindia-heading">Startup India Recognized</p>
        <p className="about-startupindia-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et maecenas accumsan lacus vel facilisis. </p>
        </div>
        <div className="split-container-child-2">
            
        </div>
        </div>
        
        <div className="manufacturer-video">
        <p className="manufacturer-video-description">Experience the art of innovation with our captivating</p>
        <p className="manufacturer-video-heading">Manufacturer video</p>
        
        </div>

        <div className="about-newsletter">
        <NewsletterSectionHomepage></NewsletterSectionHomepage>
        </div>
      </div>
  )
}

export default About

