import React from 'react'
import './NewsletterSectionHomepage.css'


const NewsletterSectionHomepage = () => {
  return (
    <div className='container newsletter-homepage'>
      <p className='newsletter-homepage-heading'>Join our Newsletter</p>
      <p className='newsletter-homepage-description'>Sign up for our newsletter today and treat yourself to something special. You'll receive exclusive offers, discounts, and surprises reserved just for our subscribers. </p>

      
      <div className="newsletter-form">
      <form>
        <input type='text'placeholder='Enter Your Email Address' />
        <button>Subscribe</button>
      </form>
      </div>
    </div>
  )
}

export default NewsletterSectionHomepage
