import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Wave from"../images/wave.png";
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <>
    <div className='footer-container'>
   
    <img src={Wave} alt="" style={{ width: "100%" }} /> <div className='container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
         
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
         <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <SocialIcon url="https://twitter.com" />
                <SocialIcon url="https://facebook.com" />
                <SocialIcon url="https://instagram.com" />
                <SocialIcon url="https://linkedin.com" />
              </div>
            </div>
      
          </div>
      </section>
    </div>
    </div>
    </>
  );
}

export default Footer;