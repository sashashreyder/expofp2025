import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            setScrolled(scrollPosition > 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            id="navbar2"
            className={`navbar2 ${scrolled ? 'scrolled' : 'transparent'}`}
        >
            <div className="navbar2-container">
                <a className="navbar2-logo" href="#">
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





