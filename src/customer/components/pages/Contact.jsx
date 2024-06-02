import React from 'react'
import './Contact.css'
import NewsletterSectionHomepage from './HomepageComponents/NewsletterSectionHomepage'

const Contact = () => {
  return (
    <div>
        <div className="contact-form container flex">
      <div className="split-container-child-1">
<img src="/images/contact_images/Contact-us.png" alt="" />
      </div>
      <div className="split-container-child-2">
        <form action="" className='flex'>
            <label htmlFor="Name">Name</label>
            <input placeholder='Your Name' id='Name' type="text" />
            <label htmlFor="Email">Email</label>
            <input placeholder='Your Email' id='Email' type="email" name="" />
            <label htmlFor="Message">Message</label>
            <input placeholder='Your Message' id='Message' type="text" />
            <button type="submit">Send Message</button>
        </form>
        </div>
      </div>

      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.352153417865!2d75.7302491833944!3d26.955745324912105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db32056f65f7d%3A0x7b55f9f12a6335e7!2spratap%20vihar%2C%2045-A%2C%20Niwaru%20Rd%2C%2021%20South%20Colony%2C%20Shanti%20Path%2C%20Jhotwara%2C%20Jaipur%2C%20Rajasthan%20302012!5e0!3m2!1sen!2sin!4v1717272456716!5m2!1sen!2sin" width="1600" height="1000" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    <div className="address-block flex container">
    <div className="address-block-1">
        <h2 className="address-block-heading">Branch 1</h2>
        <div className="icon-box flex"><img src="/images/contact_images/email-icon.png" alt="" /> <p className="infoBlock">sales@kiahhygiene.com</p></div>
        <div className="icon-box flex"><img src="/images/contact_images/call-icon.png" alt="" /> <p className="infoBlock">+12 34 56 78 90</p></div>
        <div className="icon-box flex"><img src="/images/contact_images/location-icon.png" alt="" /> <p className="infoBlock">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
    </div>
    <div className="address-block-2">
        <h2 className="address-block-heading">Branch 2</h2>
        <div className="icon-box flex"><img src="/images/contact_images/email-icon.png" alt="" /> <p className="infoBlock">sales@kiahhygiene.com</p></div>
        <div className="icon-box flex"><img src="/images/contact_images/call-icon.png" alt="" /> <p className="infoBlock">+12 34 56 78 90</p></div>
        <div className="icon-box flex"><img src="/images/contact_images/location-icon.png" alt="" /> <p className="infoBlock">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
    </div>
    </div>

      <div className="contact-newsletter container">
        <NewsletterSectionHomepage></NewsletterSectionHomepage>
        </div>
    </div>
  )
}

export default Contact
