import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './WhyKiah.css'

const WhyKiah = () => {
  return (
    <div className='container'>
        <div className="why-kiah-heading">
      <p className='why-kiah-sub-heading'>Why Kiah Hygiene</p>
      <p className='why-kiah-sub-sub-heading'>Make the switch to a new era in Adult Care with Kiah Hygiene </p>
      </div>
      <section className='flex features-section'>
        <div className='single-feature'>
            <div className="flex feature-heading">
                <img src="/images/homepage_images/home-features/home-feature-1.png" alt="" />
                <p>Ultra Thin</p>
            </div>
            <div className="feature-description">
                <p>Our adult diapers are designed with an ultra-thin profile, ensuring discreetness without compromising on absorbency or performance. This feature allows for a sleek, comfortable fit that feels natural and minimizes bulkiness, providing freedom of movement and confidence in any situation. </p>
            </div>
        </div>
        <div className='single-feature'>
            <div className="flex feature-heading">
                <img src="/images/homepage_images/home-features/home-feature-2.png" alt="" />
                <p>Breathable top sheet</p>
            </div>
            <div className="feature-description">
                <p>The breathable top sheet of our diapers is engineered to promote air circulation, maintaining skin health and comfort. This feature reduces the risk of irritation, keeping you feeling fresh and dry throughout the day, even during extended wear. </p>
            </div>
        </div>
        <div className='single-feature'>
            <div className="flex feature-heading">
                <img src="/images/homepage_images/home-features/home-feature-3.png" alt="" />
                <p>Unscented</p>
            </div>
            <div className="feature-description">
                <p>Kiah Hygiene's adult diapers are unscented, prioritizing the natural comfort and sensitivity of your skin. The absence of added fragrances ensures a gentle and non-intrusive experience, ideal for those with scent sensitivities or preferences for unscented products.</p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default WhyKiah
