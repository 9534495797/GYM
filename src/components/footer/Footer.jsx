// import React from 'react'
// import './Footer.css'
// import Github from '../../assets/github.png';
// import Instagram from '../../assets/instagram.png';
// import LinkedIn from '../../assets/linkedin.png';
// import Logo from '../../assets/logo.png';

// const Footer = () => {
//   return (
//     <div className="Footer-container">
//         <hr/>
//         <div className="footer">
//             <div className="social-links">
//                 <img src={Github} alt=""/>
//                 <img src={Instagram} alt=""/>
//                 <img src={LinkedIn} alt=""/>
//             </div>
//             <div className="logo-f">
//                 <img src={Logo} alt=""/>
//             </div>
//         </div>
//         <div className="blur blur-f-1"></div>
//         <div className="blur blur-f-2"></div>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://github.com/9534495797" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.instagram.com/chaubeyankit400?utm_source=qr&igsh=NXYyZWVsdWlzMzYy" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/ankit-chaubey-259645253" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
}

export default Footer;
