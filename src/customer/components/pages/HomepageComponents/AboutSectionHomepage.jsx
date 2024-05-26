import React from 'react'
import './AboutSectionHomepage.css'

const AboutSectionHomepage = () => {
  return (
    <div className='flex container about-section-homepage'>
      <div className="split-container-child-1">
        <img src="/images/homepage_images/about-kiah-image.png" alt="" />
      </div>
      <div className="split-container-child-2">
        <p className='homepage-about-heading'>
        About Kiah Hygiene
        </p>
        <div className='homepage-about-divider'></div>
        <p className='homepage-about-subheading'>
        At Kiah Hygiene, we believe in redefining comfort and empowering individuals to lead fulfilling lives. Our journey began with a simple yet powerful vision—to revolutionize the approach to adult care. We understand the importance of comfort, dignity, and the freedom to live life to the fullest, regardless of any challenges one might face.
        </p>
        <p className='homepage-about-subheading my-4'>
        We take pride in our commitment to quality, innovation, and customer satisfaction. Each product is meticulously crafted, blending advanced technology with thoughtful design to ensure unparalleled comfort and reliability. With a focus on skin-friendly materials and discreet design, our products offer the confidence to engage in daily activities without hindrance.
        </p>
      </div>
    </div>
  )
}

export default AboutSectionHomepage
