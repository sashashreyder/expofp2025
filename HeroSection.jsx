import React from 'react';
import useScrollAnimation from './useScrollAnimation';
import './HeroSection.css';

function HeroSection() {
    const ref = useScrollAnimation();

    const backgroundStyle = {
        backgroundImage: 'url("https://i.postimg.cc/mDKGwkcm/NEUMORPHIC-CIRCLES-BACKGROUND.jpg")',
    };

    return (
        <section id="hero-section" ref={ref} className="animated-section" style={backgroundStyle}>
            <div className="content">
                <h1 className="hello">Bem-vindo à Expo FP Brasil!</h1>
                <h2 className="text">Plantas Baixas para eventos</h2>
                <ul>
                    <li>Localizar expositores</li>
                    <li>Navegar com orientação</li>
                    <li>Reservar estandes online</li>
                </ul>
                <form className="email-form">
                    <input type="email" placeholder="Digite seu email" required />
                    <button type="submit">Inscrever-se</button>
                </form>
            </div>
            <div className="gif-mockup">
                <img
                    src="https://i.postimg.cc/Pf8HqWc9/12.gif"
                    alt="GIF Mockup"
                    className="mockup-gif"
                />
            </div>
        </section>
    );
}

export default HeroSection;







