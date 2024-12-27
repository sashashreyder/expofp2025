import React, { useState } from 'react';
import './PricingSection.css';

function PricingSection() {
  const [showInfo, setShowInfo] = useState({
    basic: false,
    premium: false,
    pro: false,
  });

  const toggleInfo = (plan) => {
    setShowInfo((prevState) => ({
      ...prevState,
      [plan]: !prevState[plan],
    }));
  };

  return (
    <section id="pricing" className="pricing-section">

      <div className="pricing-card basic">
        <h3>Plano Básico</h3>
        <p className="price">R$29/mês</p>
        <ul className="features-list">
          <li>Acesso a mapas básicos</li>
          <li>Assistência de navegação</li>
          <li>Suporte ao cliente básico</li>
        </ul>
        <button className="info-btn" onClick={() => toggleInfo('basic')}>
          {showInfo.basic ? 'Menos Informações' : 'Mais Informações'}
        </button>

        <div className={`more-info ${showInfo.basic ? 'visible' : ''}`}>
          <p>Ideal para pequenos eventos que buscam soluções de navegação simples.</p>
        </div>
      </div>

      <div className="featured">
        <h3>Plano Premium</h3>
        <p className="price">R$59/mês</p>
        <ul className="features-list">
          <li>Acesso aprimorado a mapas</li>
          <li>Assistência de navegação prioritária</li>
          <li>Suporte ao cliente premium</li>
          <li>Opções de personalização de marca</li>
        </ul>
        <button className="info-btn" onClick={() => toggleInfo('premium')}>
          {showInfo.premium ? 'Menos Informações' : 'Mais Informações'}
        </button>
        
        <div className={`more-info ${showInfo.premium ? 'visible' : ''}`}>
          <p>Melhor para médios a grandes eventos que precisam de suporte aprimorado e personalização de marca.</p>
        </div>
      </div>

      <div className="pricing-card pro">
        <h3>Plano Pro</h3>
        <p className="price">R$99/mês</p>
        <ul className="features-list">
          <li>Mapas com acesso total</li>
          <li>Gerente de suporte dedicado</li>
          <li>Análises avançadas</li>
          <li>Personalização completa de marca</li>
        </ul>
        <button className="info-btn" onClick={() => toggleInfo('pro')}>
          {showInfo.pro ? 'Menos Informações' : 'Mais Informações'}
        </button>
        <div className={`more-info ${showInfo.pro ? 'visible' : ''}`}>
          <p>Para grandes eventos que necessitam de suporte abrangente e personalização completa.</p>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;

