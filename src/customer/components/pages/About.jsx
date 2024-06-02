import React from 'react'
import './About.css'
import NewsletterSectionHomepage from './HomepageComponents/NewsletterSectionHomepage'

const About = () => {
  return (
    <div>
      <div className='container flex about-section'>
      <div className="split-container-child-1">
        <img src="/images/about_images/about-ourstory.png" alt="" />
      </div>
      <div className="split-container-child-2">
        <p className='about-heading'>
        Our Story
        </p>
        <div className='about-divider'></div>
        <p className='about-subheading'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et maecenas accumsan lacus vel facilisis.
        </p>
      </div>
    </div>

<div className="startup-india">
      <div className="startup-india-mobile flex container">
        <div className="split-container-child-1">
        <p className='startup-heading'>
        Startup India Recognized
        </p>
        <p className='startup-subheading'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et maecenas accumsan lacus vel facilisis.
        </p>
        </div>
        <div className="split-container-child-2">
        <img src="/images/about_images/about-startupindia.png" alt="" />
        </div>
        </div>
        </div>

        <div className="flex manufacturer-video">
        <p className="manufacturer-video-description">Experience the art of innovation with our captivating</p>
        <p className="manufacturer-video-heading">Manufacturer video</p>
        <iframe width="900" height="506" src="https://www.youtube.com/embed/Kt1PfLIcskQ" title="कैसे शुरू करें सैनिटरी पैड व्यवसाय | How to Start Sanitary Pad Manufacturing Business" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="about-newsletter">
        <NewsletterSectionHomepage></NewsletterSectionHomepage>
        </div>
      </div>
  )
}

export default About

