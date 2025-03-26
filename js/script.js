// Portfolio - Nadia Mashiat
// JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    console.log("Document loaded, starting initialization");
    
    // Add error handler for uncaught errors
    window.addEventListener('error', function(e) {
        console.error('Global error:', e.message);
        const loadingMessage = document.getElementById('loading-message');
        if (loadingMessage) {
            loadingMessage.innerHTML = `
                <h2>Error Detected</h2>
                <p>An error occurred while loading the portfolio:</p>
                <p style="color: red; font-family: monospace;">${e.message}</p>
                <p>Check your browser console for more details.</p>
            `;
        }
    });
    
    // Load all sections
    loadSections();
    
    // Initialize theme from config
    try {
        initializeTheme();
        console.log("Theme initialized");
    } catch (error) {
        console.error("Error initializing theme:", error);
    }
    
    // Update header name and title from config
    try {
        updateHeaderInfo();
        console.log("Header info updated");
    } catch (error) {
        console.error("Error updating header info:", error);
    }
    
    // Wait for sections to load before initializing functionality
    setTimeout(() => {
        try {
            initializeNavigation();
            initializeContactForm();
            initializeScrollEffects();
            animateOnScroll();
            console.log("All interactions initialized");
        } catch (error) {
            console.error("Error initializing interactions:", error);
        }
    }, 500);
});

// Load all sections dynamically
async function loadSections() {
    console.log("Starting to load sections");
    const mainContent = document.getElementById('main-content');
    if (!mainContent) {
        console.error("Main content element not found");
        return;
    }
    
    const loadingMessage = document.getElementById('loading-message');
    
    const sections = [
        'about',
        'education',
        'experience',
        'skills',
        'projects',
        'training',
        'contact'
    ];
    
    let sectionsLoaded = 0;
    let failedSections = [];
    
    // Update loading message with progress
    const updateLoadingMessage = () => {
        if (loadingMessage) {
            loadingMessage.innerHTML = `
                <h2>Loading content... (${sectionsLoaded}/${sections.length})</h2>
                <p>Loading sections from the server...</p>
                ${failedSections.length > 0 ? 
                    `<p style="color: red;">Failed to load: ${failedSections.join(', ')}</p>` : ''}
            `;
        }
    };
    
    updateLoadingMessage();
    
    // Load each section
    for (const section of sections) {
        try {
            console.log(`Attempting to load section: ${section}`);
            const url = `sections/${section}.html`;
            console.log(`Fetching from URL: ${url}`);
            
            const response = await fetch(url);
            console.log(`Response for ${section}:`, response.status);
            
            if (response.ok) {
                const html = await response.text();
                const div = document.createElement('div');
                div.innerHTML = html;
                mainContent.appendChild(div.firstElementChild);
                sectionsLoaded++;
                console.log(`Successfully loaded section: ${section}`);
            } else {
                console.error(`Failed to load section: ${section}, status: ${response.status}`);
                failedSections.push(section);
            }
        } catch (error) {
            console.error(`Error loading section ${section}:`, error);
            failedSections.push(section);
        }
        
        updateLoadingMessage();
    }
    
    // Remove loading message if all sections loaded
    if (sectionsLoaded === sections.length && loadingMessage) {
        loadingMessage.remove();
        console.log("All sections loaded successfully");
    } 
    // Show error if some sections failed
    else if (failedSections.length > 0 && loadingMessage) {
        loadingMessage.innerHTML = `
            <h2>Some content failed to load</h2>
            <p>The following sections could not be loaded:</p>
            <ul style="max-width: 500px; margin: 0 auto; text-align: left;">
                ${failedSections.map(section => `<li>${section}</li>`).join('')}
            </ul>
            <p style="margin-top: 20px;">This is likely due to a file path issue or missing files.</p>
            <p>When viewing locally, try using a local server to avoid CORS issues.</p>
            <p>
                <button onclick="window.location.reload()" style="padding: 8px 16px; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px;">
                    Retry Loading
                </button>
            </p>
        `;
    }
}

// Initialize theme from config
function initializeTheme() {
    if (typeof portfolioConfig !== 'undefined' && portfolioConfig.appearance && portfolioConfig.appearance.theme) {
        applyTheme(portfolioConfig.appearance.theme);
    }
    
    // Add theme switcher if desired
    addThemeSwitcher();
}

// Add theme switcher in settings menu
function addThemeSwitcher() {
    const header = document.querySelector('header .container');
    if (!header) return;
    
    // Create settings button
    const settingsBtn = document.createElement('div');
    settingsBtn.className = 'settings-btn';
    settingsBtn.innerHTML = '<i class="fas fa-cog"></i>';
    header.appendChild(settingsBtn);
    
    // Create settings panel
    const settingsPanel = document.createElement('div');
    settingsPanel.className = 'settings-panel';
    settingsPanel.innerHTML = `
        <h3>Theme Settings</h3>
        <div class="theme-options">
            <button class="theme-btn" data-theme="green">Green</button>
            <button class="theme-btn" data-theme="blue">Blue</button>
            <button class="theme-btn" data-theme="purple">Purple</button>
            <button class="theme-btn" data-theme="orange">Orange</button>
            <button class="theme-btn" data-theme="red">Red</button>
        </div>
    `;
    header.appendChild(settingsPanel);
    
    // Toggle settings panel
    settingsBtn.addEventListener('click', () => {
        settingsPanel.classList.toggle('active');
    });
    
    // Theme buttons click event
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            applyTheme(theme);
            
            // Remove active class from all buttons
            themeButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
        });
    });
    
    // Add CSS for settings
    const style = document.createElement('style');
    style.textContent = `
        .settings-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            cursor: pointer;
            font-size: 1.2rem;
            color: var(--dark-color);
            transition: all 0.3s ease;
            margin-left: 15px;
        }
        
        .settings-btn:hover {
            color: var(--primary-color);
            transform: rotate(30deg);
        }
        
        .settings-panel {
            position: absolute;
            top: 70px;
            right: 20px;
            background-color: var(--light-color);
            box-shadow: var(--box-shadow);
            border-radius: var(--border-radius);
            padding: 20px;
            display: none;
            z-index: 1000;
        }
        
        .settings-panel.active {
            display: block;
        }
        
        .settings-panel h3 {
            margin-bottom: 15px;
            font-size: 1.1rem;
        }
        
        .theme-options {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .theme-btn {
            padding: 8px 12px;
            border: none;
            background-color: var(--secondary-color);
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .theme-btn:hover {
            background-color: var(--primary-color);
            color: var(--light-color);
        }
        
        .theme-btn.active {
            background-color: var(--primary-color);
            color: var(--light-color);
        }
    `;
    document.head.appendChild(style);
}

// Update header information from config
function updateHeaderInfo() {
    if (typeof portfolioConfig === 'undefined') return;
    
    // Update name in logo
    const logoLink = document.querySelector('.logo a');
    if (logoLink && portfolioConfig.name) {
        logoLink.textContent = portfolioConfig.name;
    }
    
    // Update footer copyright year
    const copyright = document.querySelector('.copyright p');
    if (copyright && portfolioConfig.copyrightYear) {
        copyright.innerHTML = `&copy; ${portfolioConfig.copyrightYear} ${portfolioConfig.name}. All Rights Reserved.`;
    }
    
    // Update social links
    if (portfolioConfig.contact) {
        const linkedinLink = document.querySelector('.social-links a[href*="linkedin"]');
        if (linkedinLink && portfolioConfig.contact.linkedin) {
            linkedinLink.href = portfolioConfig.contact.linkedin;
        }
        
        const githubLink = document.querySelector('.social-links a[href*="github"]');
        if (githubLink && portfolioConfig.contact.github) {
            githubLink.href = portfolioConfig.contact.github;
        }
        
        const twitterLink = document.querySelector('.social-links a[href*="twitter"]');
        if (twitterLink && portfolioConfig.contact.twitter) {
            twitterLink.href = portfolioConfig.contact.twitter;
        }
    }
}

// Initialize navigation and mobile menu
function initializeNavigation() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    
    if (menuBtn && navLinks) {
        // Toggle mobile menu
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('open');
        });
        
        // Close mobile menu when clicking nav items
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('open');
            });
        });
        
        // Add active class styles for mobile menu button
        const menuBtnStyle = document.createElement('style');
        menuBtnStyle.textContent = `
            .menu-btn.open .menu-btn__burger {
                background: transparent;
            }
            
            .menu-btn.open .menu-btn__burger::before {
                transform: rotate(45deg);
            }
            
            .menu-btn.open .menu-btn__burger::after {
                transform: rotate(-45deg);
            }
        `;
        document.head.appendChild(menuBtnStyle);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to nav items on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // For GitHub Pages we'll just simulate the form submission
            // as we can't handle actual backend processing
            alert('Thank you for your message! As this is a static GitHub Pages site, the form cannot be submitted directly. In a production environment, this would connect to a backend service.');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Add scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.classList.add('scroll-top-btn');
    document.body.appendChild(scrollTopBtn);
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Add CSS for scroll to top button
    const style = document.createElement('style');
    style.textContent = `
        .scroll-top-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            z-index: 100;
        }
        
        .scroll-top-btn.show {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-top-btn:hover {
            background-color: #236b43;
            transform: translateY(-3px);
        }
        
        .nav-links a.active {
            color: var(--primary-color);
            font-weight: 600;
        }
    `;
    document.head.appendChild(style);
}

// Animation for elements when they come into view
function animateOnScroll() {
    // Add fade-in class with CSS
    const fadeStyle = document.createElement('style');
    fadeStyle.textContent = `
        .edu-card, .timeline-content, .project-card, .training-card, .contact-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(fadeStyle);
    
    // Function to check elements and animate
    const checkElements = () => {
        const elements = document.querySelectorAll('.edu-card, .timeline-content, .project-card, .training-card, .contact-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Run on load and scroll
    window.addEventListener('load', checkElements);
    window.addEventListener('scroll', checkElements);
} 