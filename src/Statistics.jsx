import React, { useEffect, useState, useRef } from 'react';
import './Statistics.css';

function Statistics() {
  const [indoorSpace, setIndoorSpace] = useState(0);
  const [pointsOfInterest, setPointsOfInterest] = useState(0);
  const [monthlyUsers, setMonthlyUsers] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statisticsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statisticsRef.current) {
      observer.observe(statisticsRef.current);
    }

    return () => {
      if (statisticsRef.current) {
        observer.unobserve(statisticsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateNumber(setIndoorSpace, 18000000, 2000);
      animateNumber(setPointsOfInterest, 116552, 2000);
      animateNumber(setMonthlyUsers, 107000, 2000);
    }
  }, [isVisible]);

  const animateNumber = (setter, target, duration) => {
    let start = 0;
    const increment = target / (duration / 16); // 60 FPS
    const animate = () => {
      start += increment;
      if (start < target) {
        setter(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setter(target);
      }
    };
    animate();
  };

  return (
    <section className="statistics-section" ref={statisticsRef}>
      <div className="statistics-header">
        <h1>Nossas Estatísticas</h1>
        <hr className="header-line1" />
      </div>
      <div className="statistics-container">
        <div className="stat-item">
          <div className="icon">🗺️</div>
          <h3 className="stat-number">{indoorSpace.toLocaleString()}M</h3>
          <p>Indoor space mapped (m²)</p>
        </div>
        <div className="stat-item">
          <div className="icon">📍</div>
          <h3 className="stat-number">{pointsOfInterest.toLocaleString()}</h3>
          <p>Unique points-of-interest</p>
        </div>
        <div className="stat-item">
          <div className="icon">👥</div>
          <h3 className="stat-number">{monthlyUsers.toLocaleString()}k</h3>
          <p>Monthly users</p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;



