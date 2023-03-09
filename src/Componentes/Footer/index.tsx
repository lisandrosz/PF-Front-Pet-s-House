import React from 'react';
import './styleFooter.css';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer1">
        <div className="footer-container">
          <img src="logo.png" alt="logo" className="logo" />
          <p className="p8">Todos los derechos reservados © 2023 Pets House</p>
          <ul className="ul7">
            <li className="li0">
              <p>Términos y Condiciones</p>
            </li>
            <li className="li0">
              <p>Política de privacidad</p>
            </li>
            <li className="li0">
              <p>Contacto</p>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
