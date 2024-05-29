import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../customer/components/pages/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
// import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import ProductLive from '../customer/components/Product/ProductLive'
import Privacy from '../customer/components/pages/PrivacyPolicy'
import TermsConditions from '../customer/components/pages/TermsConditions'
import ShippingReturns from '../customer/components/pages/ShippingReturns'
import About from '../customer/components/pages/About'
import Contact from '../customer/components/pages/Contact'

const CustomerRouters = () => {
  return (
    <div>
    <div>
        <Navigation></Navigation>
      </div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/about-us' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/product' element={<ProductLive/>}></Route>
        <Route path='/product/productdetails' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route> 
        <Route path='/account/order' element={<Order/>}></Route> 
        <Route path='/account/orderdetails' element={<OrderDetails/>}></Route> 
        <Route path='/pages/privacy-policy' element={<Privacy/>}></Route>
        <Route path='/pages/terms-conditions' element={<TermsConditions/>}></Route>
        <Route path='/pages/shipping-returns' element={<ShippingReturns/>}></Route>


      </Routes>
      <div>
        <Footer></Footer>
      </div>
    </div>
    
  )
}

export default CustomerRouters
