
import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css';

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <div className="dark-mode-toggle">
            <label className="switch">
                <input type="checkbox" checked={darkMode} onChange={handleToggle} />
                <span className="slider"></span>
            </label>
            <span className="toggle-text">{darkMode ? '🌙' : '☀️'}</span>
        </div>
    );
}

export default DarkModeToggle;
