import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './OurProducts.css'
import { Link } from 'react-router-dom';

const OurProducts = () => {
  return (
    <div>
        <div className="products-heading">
      <p className='our-products-heading'>Our Products</p>
      </div>
      <section className='flex products-section '>
        <div className='single-product'>
            <img src="/images/product/product-1.png" alt="" />
            <div className="single-product-content">
            <p className='single-product-name'>Pant Style Diapers</p>
            <p className='single-product-description'>Discover ultimate ease with our Pant Style Diapers. Engineered for convenience and comfort</p>
            <div className='flex single-product-reviews'>
                <div className='flex single-product-rating'>
                    <StarIcon fontSize='small'></StarIcon>
                    <p>5.0</p>
                </div>
                <p>240 Reviews</p>
            </div>
            {/* <div className='flex product-price'>
                <p className="active-price">₹2000</p>
                <p className="inactive-price">₹2500</p>
            </div> */}
            <button className='product-purchase-button'><Link to='/product/productdetails'>Contact Us</Link></button>
            </div>
        </div>
        <div className='single-product'>
            <img src="/images/product/product-2.png" alt="" />
            <div className="single-product-content">
            <p className='single-product-name'>Sanitary Pads</p>
            <p className='single-product-description'>Experience unparalleled comfort and reliability with our Sanitary Pads. Crafted with the finest materials and innovative technology</p>
            <div className='flex single-product-reviews'>
                <div className='flex single-product-rating'>
                    <StarIcon fontSize='small'></StarIcon>
                    <p>5.0</p>
                </div>
                <p>240 Reviews</p>
            </div>
            {/* <div className='flex product-price'>
                <p className="active-price">₹800</p>
                <p className="inactive-price">₹1200</p>
            </div> */}
            <button className='product-purchase-button'><Link to='/product/productdetails'>Contact Us</Link></button>
            </div>
        </div>
        <div className='single-product'>
            <img src="/images/product/product-3.png" alt="" />
            <div className="single-product-content">
            <p className='single-product-name'>Tape Style Diapers</p>
            <p className='single-product-description'>Our Tape Style Diapers are a testament to comfort and versatility. With adjustable tapes for a customizable fit</p>
            <div className='flex single-product-reviews'>
                <div className='flex single-product-rating'>
                    <StarIcon fontSize='small'></StarIcon>
                    <p>5.0</p>
                </div>
                <p>240 Reviews</p>
            </div>
            {/* <div className='flex product-price'>
                <p className="active-price">₹1500</p>
                <p className="inactive-price">₹2500</p>
            </div> */}
            <button className='product-purchase-button'><Link to='/product/productdetails'>Contact Us</Link></button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default OurProducts
