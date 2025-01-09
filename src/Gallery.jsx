import React from 'react';
import { Carousel } from 'react-bootstrap';
import useScrollAnimation from './useScrollAnimation';
import './Gallery.css';

function Gallery() {
    const ref = useScrollAnimation();

    return (
        <section id="Gallery" ref={ref} className="animated-section">
            <div className="gallery-container">
                <div className="gallery-header">
                    <h1>Nossas plantas baixas recentes</h1>
                </div>
                <hr className="header-line" />
                <Carousel interval={3000} controls={true} indicators={false} pause="hover">
                    <Carousel.Item>
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-6 gallery-item">
                                <a href="https://mroap24.expofp.com/" target="_blank" className="square-placeholder" rel="noreferrer">
                                    <div className="placeholder-content">
                                        <img src="https://i.postimg.cc/YCxMHtVS/MRO1.png" alt="MRO1" />
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3 col-6 gallery-item">
                                <a href="https://cap25.expofp.com/" target="_blank" className="square-placeholder" rel="noreferrer">
                                    <div className="placeholder-content">
                                        <img src="https://i.postimg.cc/MTTLgwkg/cap25.png" alt="CAP25" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 col-6 gallery-item">
                                <a href="https://floridagroves2025.expofp.com/3" target="_blank" className="square-placeholder" rel="noreferrer">
                                    <div className="placeholder-content">
                                        <img src="https://i.postimg.cc/59Zx57Lf/Florida-Gr.png" alt="Florida Groves" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 col-6 gallery-item">
                                <a href="https://printingunitedexpo2023.expofp.com/" target="_blank" className="square-placeholder" rel="noreferrer">
                                    <div className="placeholder-content">
                                        <img src="https://i.postimg.cc/fb2sVBMn/printing.png" alt="Printing United Expo" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-6 gallery-item">
                                <a href="https://sector24.expofp.com/" target="_blank" className="square-placeholder" rel="noreferrer">
                                    <div className="placeholder-content">
                                        <img src="https://i.postimg.cc/0QzsDDN6/sector.png" alt="Sector 24" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 col-6 gallery-item">
                                <a href="https://bpiwest2025.expofp.com/" target="_blank" className="square-placeholder" rel="noreferrer">
                                    <div className="placeholder-content">
                                        <img src="https://i.postimg.cc/hj5YBYcv/bpiw.png" alt="BPI West" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 col-6 gallery-item">
                                <a href="https://globalpetexpo.expofp.com/" target="_blank" className="square-placeholder" rel="noreferrer">
                                    <div className="placeholder-content">
                                        <img src="https://i.postimg.cc/zfX5D9ZF/PetExpo.png" alt="Global Pet Expo" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 col-6 gallery-item">
                                <a href="https://sgfintechfestival.expofp.com/" target="_blank" className="square-placeholder" rel="noreferrer">
                                    <div className="placeholder-content">
                                        <img src="https://i.postimg.cc/wMJYbzLg/sff.png" alt="SG Fintech Festival" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default Gallery;

