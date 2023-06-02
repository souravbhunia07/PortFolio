import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SOURAV</a>

      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        {/* <li><a href='#services'>Services</a></li> */}
        <li><a href='#portfolio'>Portfolio</a></li>
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sourav-kumar-bhunia-38408917a/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        {/* <a href="https://instagram.com/sourav.bhunia07?igshid=ZDdkNTZiNTM="><BsInstagram /></a> */}
        <a href="https://twitter.com/SouravKumarBhu7" target="_blank" rel="noreferrer"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SOURAV. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer