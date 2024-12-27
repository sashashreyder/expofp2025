import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Gallery.css';

function Gallery() {
    return (
        <section id="Gallery">
        
        <div className="gallery-container">
        <div className='gallery-header'><h1>Nossas plantas baixas recentes</h1></div>
        <hr className="header-line" />
            <Carousel interval={3000} controls={true} indicators={false} pause="hover">
                <Carousel.Item>
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-6 gallery-item">
                            <a href="https://mroap24.expofp.com/" target="_blank"  className="square-placeholder">
                                <div className="placeholder-content"><img src='/src/media/MRO1.png' /> </div>
                            </a>
                        </div>

                        <div className="col-md-3 col-6 gallery-item">
                            <a href="https://cap25.expofp.com/" target="_blank" className="square-placeholder">
                                <div className="placeholder-content"><img src='/src/media/cap25.png' /></div>
                            </a>
                        </div>
                        <div className="col-md-3 col-6 gallery-item">
                            <a href="https://floridagroves2025.expofp.com/3" target="_blank" className="square-placeholder">
                                <div className="placeholder-content"><img src='/src/media/FloridaGr.png' /></div>
                            </a>
                        </div>
                        <div className="col-md-3 col-6 gallery-item">
                        <a href="https://printingunitedexpo2023.expofp.com/" target="_blank" className="square-placeholder">
                                <div className="placeholder-content"><img src='/src/media/printing.png' /></div>
                            </a>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-6 gallery-item">
                        <a href="https://sector24.expofp.com/" target="_blank" className="square-placeholder">
                                <div className="placeholder-content"><img src='/src/media/sector.png' /></div>
                            </a>
                        </div>
                        <div className="col-md-3 col-6 gallery-item">
                        <a href="https://bpiwest2025.expofp.com/" target="_blank" className="square-placeholder">
                                <div className="placeholder-content"><img src='/src/media/bpiw.png' /></div>
                            </a>
                        </div>
                        <div className="col-md-3 col-6 gallery-item">
                        <a href="https://globalpetexpo.expofp.com/" target="_blank" className="square-placeholder">
                                <div className="placeholder-content"><img src='/src/media/PetExpo.png' /></div>
                            </a>
                        </div>
                        <div className="col-md-3 col-6 gallery-item">
                        <a href="https://sgfintechfestival.expofp.com/" target="_blank" className="square-placeholder">
                                <div className="placeholder-content"><img src='/src/media/sff.png' /></div>
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

