import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <section id="hero-section">
            <div className="background-video">
            
            </div>
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
                    src="src/media/12.gif"
                    alt="GIF Mockup"
                    className="mockup-gif"
                />
            </div>
        </section>
    );
}

export default HeroSection;






