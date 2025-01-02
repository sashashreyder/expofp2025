import React from 'react';
import useScrollAnimation from './useScrollAnimation';
import './Features.css';

function Features2() {
    const ref = useScrollAnimation({ threshold: 0.2 }); 

    const features = [
        {
            title: "Localizar Expositores",
            description: "Encontre facilmente os expositores que você procura em nosso evento. Acompanhe os detalhes de cada expositor e planeje sua visita com antecedência.",
            imgSrc: "https://i.postimg.cc/jqWx70W8/feature1.png",
        },
        {
            title: "Navegação com Orientação",
            description: "Oriente-se pelo evento com navegação fácil e precisa. Use nosso aplicativo para encontrar estandes e exposições em poucos cliques.",
            imgSrc: "https://i.postimg.cc/qgfZtCtd/feature2.png", 
        },
        {
            title: "Reservar Estandes Online",
            description: "Reserve seu espaço para o evento com nosso sistema de reserva online, garantindo visibilidade e alcance para sua marca no evento.",
            imgSrc: "https://i.postimg.cc/MKVz97mV/feature3.png",
        },
        {
            title: "Suporte 24/7",
            description: "Estamos aqui para ajudar você a qualquer hora com nosso suporte contínuo. Envie perguntas ou resolva problemas diretamente no aplicativo.",
            imgSrc: "https://i.postimg.cc/GmRdV4XN/feature4.png", 
        },
    ];
    

    return (
        <section ref={ref} id="features" className="features-section animated-section">
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


