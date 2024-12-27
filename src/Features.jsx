import React from 'react';
import feature1 from './media/feature1.png';
import feature2 from './media/Feature2.png';
import feature4 from './media/feature4.png';
import './Features.css';

function Features2() {
    const features = [
        {
            title: "Localizar Expositores",
            description: "Encontre facilmente os expositores que você procura em nosso evento. Acompanhe os detalhes de cada expositor e planeje sua visita com antecedência.",
            imgSrc: feature1,
        },
        {
            title: "Navegação com Orientação",
            description: "Oriente-se pelo evento com navegação fácil e precisa. Use nosso aplicativo para encontrar estandes e exposições em poucos cliques.",
            imgSrc: feature2,
        },
        {
            title: "Reservar Estandes Online",
            description: "Reserve seu espaço para o evento com nosso sistema de reserva online, garantindo visibilidade e alcance para sua marca no evento.",
            imgSrc: "/src/media/feature3.png",
        },
        {
            title: "Suporte 24/7",
            description: "Estamos aqui para ajudar você a qualquer hora com nosso suporte contínuo. Envie perguntas ou resolva problemas diretamente no aplicativo.",
            imgSrc: feature4,
        },
    ];

    return (
        <section id="features" className="features-section">
            <header className="features-header">
                <h2>Nossas Funcionalidades</h2>
                <p>Descubra as ferramentas e recursos incríveis que oferecemos para o sucesso do seu evento.</p>
            </header>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-image-container">
                            <img src={feature.imgSrc} alt={feature.title} className="feature-image" />
                        </div>
                        <div className="feature-content">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features2;
