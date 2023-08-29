import React from 'react';
import './Footer.css';
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer className='footer'>
      <div className='footer-content'>
        <p className='footer-text'>
          Privacy Policy | Copyright C 2021 Lucioles Home Page | Powered by Lucioles Home Page
        </p>
        <div className='social-icons'>
          <Link to='https://www.facebook.com/' target='_blank'>
            <BiLogoFacebook className='icon'/>
          </Link>
          <Link to='https://www.twitter.com/' target='_blank'>
            <BiLogoTwitter className='icon'/>
          </Link>
          <Link to='https://www.linkedin.com/' target='_blank'>
            <BiLogoLinkedin className='icon'/>
          </Link>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
