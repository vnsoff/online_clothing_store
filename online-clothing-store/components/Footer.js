import React from 'react';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
<div className="container mx-10 flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-1/4">
          <h3 className="text-2xl font-bold mb-4">Customer Service</h3>
          <ul className="list-unstyled">
            <li>Track Order</li>
            <li>Returns and Exchanges</li>
            <li>Shipping</li>
            <li>International Orders</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4">
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <ul className="list-unstyled">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Social Responsibility</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4">
          <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
          <p>Subscribe to our newsletter for updates.</p>
        </div>
        <div className="w-full lg:w-1/4">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;