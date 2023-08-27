import React from 'react';
import './Footer.css';
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className='footer-items'>
                    <li>
                    <p>&copy; Privacy Policy | Copyright C 2021 Lucioles Home Page | Powered by Lucioles Home Page</p>                    </li>
                    <li>
                        <Link to='https://www.facebook.com/' target='_blank'>
                            <BiLogoFacebook className='icon'/>
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.twitter.com/' target='_blank'>
                            <BiLogoTwitter className='icon'/>
                        </Link>
                    </li>
                    <li>
                      <Link to='https://www.linkedin.com/' target='_blank'>
                        <BiLogoLinkedin className='icon'/>
                      </Link>
                    </li>
                </ul>
    </footer>
  );
};
export default Footer;