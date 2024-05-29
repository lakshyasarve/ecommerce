import React from 'react'
import './Contact.css'
import NewsletterSectionHomepage from './HomepageComponents/NewsletterSectionHomepage'

const Contact = () => {
  return (
    <div className='container'>
        <div className="contact-form">
      <div className="split-container-child-1">

      </div>
      <div className="split-container-child-2">
        <form action="">
            <label htmlFor=""></label>
            <input type="text" />
            <label htmlFor=""></label>
            <input type="email" name="" id="" />
            <label htmlFor=""></label>
            <input type="text" />
        </form>
        </div>
      </div>

      <div className="map">

      </div>

    <div className="address-block">
    <div className="address-block-1">
        <h2 className="address-block-heading"></h2>
        <div className="icon-box"><img src="" alt="" /> <p className="infoBlock">sales@kiahhygiene.com</p></div>
        <div className="icon-box">Icon <p className="infoBlock">+12 34 56 78 90</p></div>
        <div className="icon-box">Icon <p className="infoBlock">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
    </div>
    </div>

      <div className="contact-newsletter">
        <NewsletterSectionHomepage></NewsletterSectionHomepage>
        </div>
    </div>
  )
}

export default Contact
