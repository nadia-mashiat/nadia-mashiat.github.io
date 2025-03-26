# Nadia Mashiat - Personal Portfolio

A clean, responsive personal portfolio website showcasing professional experience, skills, and accomplishments. This portfolio is designed to be deployed on GitHub Pages and is structured for easy content updates by non-technical users.

## Features

- Responsive design that works across devices
- Modern UI with smooth animations and transitions
- Modular structure with separate HTML files for each section
- Easy content updates without coding knowledge
- Multiple color themes with an interactive theme switcher
- Mobile-friendly navigation
- Contact form (note: as this is a static site, the form submission is simulated)
- Social media integration

## Designed for Non-Technical Users

This portfolio is specifically designed for easy maintenance by non-technical users:

- Each section is in its own HTML file with clear comments and templates
- Basic information can be changed in a single configuration file
- Color themes can be changed with a simple setting
- Comprehensive editing guide included (see EDITING_GUIDE.md)

## Technologies Used

- HTML5
- CSS3 (with CSS variables and modern layout techniques)
- JavaScript (vanilla, no frameworks)
- Font Awesome for icons
- Google Fonts

## Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML if you want to make more advanced modifications

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/portfolio-nadia.git
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-nadia
   ```

3. Open `index.html` in your browser to view the site locally.

### Customization

For basic customization, follow the instructions in the EDITING_GUIDE.md file. This guide explains:

- How to update basic information like name and title
- How to edit each section of content
- How to change color themes
- How to add your profile photo

## Deployment to GitHub Pages

1. Create a GitHub repository for your portfolio.

2. Push your code to the repository:
   ```
   git add .
   git commit -m "Initial portfolio setup"
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. Go to your GitHub repository settings, scroll down to the GitHub Pages section.

4. Select the branch to deploy (usually `main` or `master`) and save.

5. Your portfolio will be available at `https://yourusername.github.io` after a few minutes.

## Project Structure

```
portfolio-nadia/
├── config/                  # Configuration files
│   ├── settings.js          # Personal information and settings
│   └── themes.js            # Color theme definitions
├── css/
│   └── styles.css           # Main stylesheet
├── js/
│   └── script.js            # JavaScript functionality
├── images/
│   └── profile.jpg          # Profile image
├── sections/                # Individual content sections
│   ├── about.html           # About/hero section
│   ├── education.html       # Education history
│   ├── experience.html      # Work experience
│   ├── skills.html          # Skills and competencies
│   ├── projects.html        # Projects and activities
│   ├── training.html        # Training and workshops
│   └── contact.html         # Contact information
├── index.html               # Main HTML file
├── README.md                # This documentation
└── EDITING_GUIDE.md         # Guide for non-technical users
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Font Awesome for the icons
- Google Fonts for the typography

---

Created with ❤️ by [Your Name] 