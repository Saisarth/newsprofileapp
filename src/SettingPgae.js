import React, { useState } from 'react';
import './style.css'

const SettingsPage = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
            <h2>Settings</h2>
            <div className="dark-mode-toggle">
                <label htmlFor="darkModeToggle">Dark Mode</label>
                <input type="checkbox" id="darkModeToggle" checked={darkMode} onChange={handleDarkModeToggle} />
            </div>
            {/* Add more settings here */}
        </div>
    );
};

export default SettingsPage;
