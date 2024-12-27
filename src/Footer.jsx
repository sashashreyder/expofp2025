import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img 
                        src="https://expofp.com/template/img/site-header-logo.png" 
                        alt="Logo do Expo FP" 
                        className="footer-logo-img" 
                    />
                </div>
                <div className="footer-links">
                    <a href="#hero-section" className="footer-link">Início</a>
                    <a href="#features" className="footer-link">Funcionalidades</a>
                    <a href="#pricing" className="footer-link">Preços</a>
                    <a href="#contact" className="footer-link">Contato</a>
                </div>
                <div className="footer-text">
                    © 2024 Expo FP Brasil. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
