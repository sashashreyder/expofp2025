import React from 'react';
import './ContactForm.css';
import useScrollAnimation from './useScrollAnimation';

function ContactForm() {
    const ref = useScrollAnimation();

    return (
        <section id="contact" ref={ref} className="animated-section">
            <div className="contact-form-section">
                <div className="contact-form-container">
                    {/* Imagem */}
                    <div className="contact-image">
                        <img src="https://i.postimg.cc/5yQRNm23/contact-form.png" alt="Ícone de Contato" />
                    </div>
                    
                    {/* Formulário de Contato */}
                    <div className="contact-form-content">
                        <h2 className="contact-title">Entre em Contato</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Nome</label>
                                <input type="text" id="name" name="name" placeholder="Seu Nome" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Seu Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Mensagem</label>
                                <textarea id="message" name="message" rows="4" placeholder="Sua Mensagem" required></textarea>
                            </div>
                            <button type="submit" className="submit-button">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;



