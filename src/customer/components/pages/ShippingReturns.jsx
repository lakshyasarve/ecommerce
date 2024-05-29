import React from 'react'
import './ShippingReturns.css';
import { Link } from 'react-router-dom';

const ShippingReturns = () => {
  return (
    <div className='container policies'>
      <div className="policies-nav">
        <nav>
          <ul>
          <Link to='/pages/privacy-policy'><li>Privacy Policy</li></Link>
                <Link to='/pages/terms-conditions'> <li>Terms & Condition</li></Link>
                <Link to='/pages/shipping-returns'><li>Shpping & Returns</li></Link>
          </ul>
        </nav>
      </div>
    <div className="policies-content">
      <h3>SHIPPING & RETURNS</h3>
      <div className="policies-spacer"></div>
      <h5>HOW FAST IS YOUR SHIPPING?</h5>
<h6>Most of our orders are shipped 1-3 days from purchase pending availability and credit verification. Once your order is shipped, we estimate you will receive your order within 5-7 business days of its ship date. If you need your item(s) sooner, please select the expedited shipping option. Shipping times may vary, but rest assured we work our hardest to get you your order as quickly as possible. Effective March 25, 2020, DHL services are operating at a slightly reduced capacity due to airline reductions. Please note that international shipments will arrive 2-3 days later than normal. We reserve the right to cancel orders due to shipping restrictions in place worldwide. Customer service will notify you if this cancellation occurs. Shipping costs are nonrefundable. We are unable to ship to PO Box and military addresses. Cult Gaia is not responsible for packages once they have been scanned and delivered.</h6>

<div className="policies-spacer"></div>
<h5>HOW LONG DOES INTERNATIONAL SHIPPING TAKE?</h5>
<h6>Orders placed before noon PST will generally ship 1-3 business day via DHL Express. Effective March 25, 2020, DHL services are operating at a slightly reduced capacity due to airline reductions. Please note that international shipments will arrive 2-3 days later than normal. If you need to place an order for rush shipment please contact us at orders@cultgaia.com.  If for any reason your order is to be delayed or cancelled - due to stock, payment or otherwise - we will contact you via email. </h6>

<div className="policies-spacer"></div>
<h5>HOW MUCH DUTIES AND TAXES WILL I HAVE TO PAY?</h5>
<h6>Prices displayed on our website do not include taxes and duties.

Starting on July 25, 2019, Cult Gaia is partnering with Global-E to ship orders outside of the United States Delivery Duty Paid (DDP). Duties and taxes to your respective country will be displayed as a separate line item in your Check Out cart. All duties paid at check out are not collected by Cult Gaia; they are passed directly to your local customs office.

(Note - All orders placed through July 24, will be shipped Delivery Duty Unpaid (DDU). Once your order is shipped, the carrier will bill you to pay all import duties, customs and local sales taxes levied by the country you are shipping to.)

Currently, all International orders are FINAL SALE and may not be returned or exchanged. Cult Gaia is not responsible for international shipments lost in transit. </h6>

<div className="policies-spacer"></div>
<h5>CAN I CHANGE MY SHIPPING METHOD?</h5>
<h6>Once your package has been shipped out and handed to the respective courier, you cannot change the shipping method.</h6>

<div className="policies-spacer"></div>
<h5>HOW DO I RETURN MY ORDER?</h5>
<h6>Returns will not be processed unless they go through our Returns Manager portal. If you are having issues with the portal, please reach out to us at hello@cultgaia.com.

We only accept returns and exchanges on domestic orders within the United States.

We accept returns and exchanges on all full price bags within 7 days of delivery receipt.

Clothing, Jewelry, and Shoes are accepted within 14 days of delivery receipt.

International orders are final sale only and may not be returned or exchanged. Cult Gaia is not responsible for international shipments lost in transit.

The merchandise must be returned in the same condition in which it was shipped to receive a refund. This includes the original packaging and the box it came in. Cult Gaia boxes should not be used as the actual shipping box.

Please note, original and return shipping fees will not be credited back upon return.

Please make sure your items are returned new, unused and with all Cult Gaia and designer garment tags still attached. Returns that do not meet our policy will not be accepted and will be sent back to you.

Please allow up to 7 business days for your refund or exchange to be processed. You will receive a confirmation by e-mail when your return or exchange is complete.

No price adjustments for prior purchases.

All orders placed during online sales and promotional periods are final. No refunds or exchanges are allowed. If merchandise is returned despite this policy, items will be sent back to you.</h6>

<div className="policies-spacer"></div>
<h5>RETURN MY ORDER</h5>
<h6>To return unwanted items please visit our Return Center. </h6>
</div>
    </div>
  )
}

export default ShippingReturns
