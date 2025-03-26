// Theme Configuration
// This file contains different color themes that can be applied to the portfolio

const portfolioThemes = {
    // Green theme (default)
    green: {
        primaryColor: '#2e8b57', // Sea Green
        secondaryColor: '#f4f4f4',
        accentColor: '#f0c808', // Yellow
        darkColor: '#333',
        lightColor: '#fff',
        grayColor: '#777',
    },
    
    // Blue theme
    blue: {
        primaryColor: '#1e88e5', // Blue
        secondaryColor: '#f5f7fa',
        accentColor: '#ff8a65', // Coral
        darkColor: '#333',
        lightColor: '#fff',
        grayColor: '#777',
    },
    
    // Purple theme
    purple: {
        primaryColor: '#7b1fa2', // Purple
        secondaryColor: '#f5f5f5',
        accentColor: '#ffd54f', // Amber
        darkColor: '#333',
        lightColor: '#fff',
        grayColor: '#777',
    },
    
    // Orange theme
    orange: {
        primaryColor: '#e67e22', // Orange
        secondaryColor: '#f7f9fa',
        accentColor: '#3498db', // Blue
        darkColor: '#333',
        lightColor: '#fff',
        grayColor: '#777',
    },
    
    // Red theme
    red: {
        primaryColor: '#c0392b', // Red
        secondaryColor: '#f4f4f4',
        accentColor: '#2ecc71', // Green
        darkColor: '#333',
        lightColor: '#fff',
        grayColor: '#777',
    }
};

// Function to apply a theme
function applyTheme(themeName) {
    const theme = portfolioThemes[themeName] || portfolioThemes.green;
    const root = document.documentElement;
    
    root.style.setProperty('--primary-color', theme.primaryColor);
    root.style.setProperty('--secondary-color', theme.secondaryColor);
    root.style.setProperty('--accent-color', theme.accentColor);
    root.style.setProperty('--dark-color', theme.darkColor);
    root.style.setProperty('--light-color', theme.lightColor);
    root.style.setProperty('--gray-color', theme.grayColor);
} 