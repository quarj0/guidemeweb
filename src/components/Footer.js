import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import CryptoJS from 'crypto-js';
import '../styles/Footer.css'
const Footer = () => {
  const secretKey = 'mySecretKey';
  const encryptedLinkedin = CryptoJS.AES.encrypt('https://www.linkedin.com/in/quarjo/', secretKey).toString();
  const encryptedGithub = CryptoJS.AES.encrypt('https://github.com/hacks-and-codes', secretKey).toString();
  const encryptedInstagram = CryptoJS.AES.encrypt('https://www.instagram.com/quarjowusu', secretKey).toString();
  const [isDecrypted, setIsDecrypted] = useState(false);

  const handleDecrypt = () => {
    setIsDecrypted(true);
  };

  const handleNavigation = (encryptedUrl) => {
    const decryptedUrl = CryptoJS.AES.decrypt(encryptedUrl, secretKey).toString(CryptoJS.enc.Utf8);
    window.location.href = decryptedUrl;
  };

  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#LinkedIn" onClick={() => handleNavigation(encryptedLinkedin)} className='social-icons'>
          {isDecrypted ? <FaLinkedin size={32} color="#ffffff" /> : 'LinkedIn'}
        </a>
        <a href="#Github" onClick={() => handleNavigation(encryptedGithub)} className='social-icons'>
          {isDecrypted ? <FaGithub size={32} color="#ffffff" /> : 'Github'}
        </a>
        <a href="#Instagram" onClick={() => handleNavigation(encryptedInstagram)} className='social-icons'>
          {isDecrypted ? <FaInstagram size={32} color="#ffffff" /> : 'Instagram'}
        </a>
      </div>
      <p className="w3-center">Follow us on social media</p>
      <p className="w3-center">All rights reserved</p>
      <p className="w3-center">&copy; 2023 Python Tutorials</p>
      {!isDecrypted && (
        <button onClick={handleDecrypt} className="btn btn-primary">
        Show Social Media Links
        </button>
      )}
    </footer>
  );
};

export default Footer;
