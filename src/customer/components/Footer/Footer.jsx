import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BusinessIcon from '@mui/icons-material/Business';
import { Link } from 'react-router-dom';

import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className='container '>
        <section className="footer-content flex">
          <div className='footer-headline'>
            <img src="/images/Kiah_Hygiene_logo_footer.png" className='footer-logo' alt="" />
            <h5 className='logo-text'>It's easy to get in touch with us </h5>
            <div className=" flex">
              <EmailIcon className='footer-icon'></EmailIcon>
              <p>support@shopkiah.in</p>
            </div>
      
            <div className=" flex">
              <LocalPhoneIcon className='footer-icon'></LocalPhoneIcon>
              <p>+91 91090 44644</p>
            </div>
            <div className=" flex">
              <BusinessIcon className='footer-icon'></BusinessIcon>
              <p>Sefora Health and Hygiene Pvt Ltd,<br/> 74,Pratap Vihar colony, Jhotwara, Jaipur,  Rajasthan.</p>
            </div>
            <div className="footer-social-media-icon">
            <FacebookIcon fontSize='large'/>
            <InstagramIcon fontSize='large'/>
            <LinkedInIcon fontSize='large'/>
            </div>
          </div>
          <div className="footer-menu">
         
              <nav>
                <ul className='nav-links-footer'>
                <Link to='/about-us'><li>About Sefora</li></Link>
                  <li>Our Products</li>
                  <li>Knowledge Center</li>
                </ul>
              </nav>
    
              <nav>
                <ul className='nav-links-footer'>
                <Link to='/pages/privacy-policy'><li>Privacy Policy</li></Link>
                <Link to='/pages/terms-conditions'> <li>Terms & Condition</li></Link>
                <Link to='/pages/shipping-returns'><li>Shpping & Returns</li></Link>
                </ul>
              </nav>
        
          </div>
          <p className="footer-background-text">
            Kiah
            </p>
        </section>
        <section className="copyright flex">
          <p>@2024 Kiah Hygiene</p>
          <p>All Rights reserved</p>
        </section>
        </div>
      </div>
    </>
  )
}

export default Footer
