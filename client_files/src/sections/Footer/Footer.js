import React from 'react';
import './footer.scss'

import { GrFacebook, GrTwitter, GrInstagram, GrLinkedin } from 'react-icons/gr'
import Logo from '../../components/Logo';

const Footer = () => {
    return (
    <>
     <footer className="footer">
     <div className="footer_content row mx-auto container">

     <div className="footer_logo">
      <Logo />
     </div>

      <div className="col-md-3">
       <h5>Service</h5>
       <ul>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Contact</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Dispute Resolution</li>
       </ul>
      </div>

      <div className="col-md-3">
        <h5>Contact</h5>
        <ul>
          <li>Address: 1 Kingston Street, Canada.</li>
          <li>Phone: 555 555 555</li>
          <li>info@wetranslategroup.com</li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Community</h5>
        <ul className="community row mx-auto">
          <li><GrFacebook /></li>
          <li><GrTwitter /></li>
          <li><GrInstagram /></li>
          <li><GrLinkedin /></li>
         </ul>
      </div>
     </div>
    </footer>            
    </>
    )
}

export default Footer
