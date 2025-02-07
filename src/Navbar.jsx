import React, { useState } from 'react';
import useScrollAnimation from './useScrollAnimation';
import './Navbar.css';

function Navbar() {
    const ref = useScrollAnimation();
    const [scrolled, setScrolled] = useState(false);

    return (
        <nav
            ref={ref}
            id="navbar2"
            className={`navbar2`}
        >
            <div className="navbar2-container">
                <a className="navbar2-logo" href="https://expofp.com/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://expofp.com/template/img/site-header-logo.png"
                        alt="Logo Expo FP"
                        height="30"
                    />
                </a>
                <div className="navbar2-links">
                    <a className="navbar2-link" href="#hero-section">Início</a>
                    <a className="navbar2-link" href="#features">Funcionalidades</a>
                    <a className="navbar2-link" href="#pricing">Preços</a>
                    <a className="navbar2-link" href="#contact">Contato</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;





