# Portfolio Editing Guide for Non-Technical Users

This guide will help you update your portfolio content without advanced technical knowledge. The portfolio structure is designed to be easy to maintain and update.

## Table of Contents
1. [Basic Structure](#basic-structure)
2. [How to Update Basic Information](#how-to-update-basic-information)
3. [How to Update Sections](#how-to-update-sections)
4. [How to Change Colors](#how-to-change-colors)
5. [How to Add Your Photo](#how-to-add-your-photo)
6. [Deployment to GitHub Pages](#deployment-to-github-pages)

## Basic Structure

The portfolio is organized into separate files for easy updating:

- `config/settings.js` - Basic information like your name, title, contact info
- `sections/` folder - Contains individual HTML files for each section
- `images/` folder - Where you can add your profile photo and other images

## How to Update Basic Information

To update basic information like your name, title, and contact details:

1. Open the file `config/settings.js` in a text editor
2. Look for the `portfolioConfig` object with fields like `name`, `title`, `bio`
3. Change the text between the quotes to your information
4. Save the file

Example:
```javascript
name: "John Doe",  // Change to your name
title: "Web Developer", // Change to your title
```

## How to Update Sections

Each section of your portfolio is in a separate file in the `sections/` folder:

- `about.html` - The hero/about section
- `education.html` - Your education history
- `experience.html` - Your work experience
- `skills.html` - Your skills and competencies
- `projects.html` - Your projects and activities
- `training.html` - Your training and workshops
- `contact.html` - Your contact information

To update a section:

1. Open the corresponding file in a text editor
2. Look for the content you want to change
3. Edit the text between the HTML tags
4. Save the file

Each section file contains comments and examples showing how to add new entries.

Example from education.html:
```html
<!-- To add a new education entry, copy the template below and fill in your details -->
<div class="edu-card">
    <div class="edu-icon"><i class="fas fa-graduation-cap"></i></div>
    <h3>Your Degree</h3>
    <p>Your Institution</p>
    <p>Graduation Year</p>
    <p>Additional Info (like CGPA)</p>
</div>
```

## How to Change Colors

You can easily change the color theme of your portfolio:

1. Open `config/settings.js`
2. Find the `appearance` section
3. Change the `theme` value to one of: "green", "blue", "purple", "orange", or "red"
4. Save the file

Example:
```javascript
appearance: {
    theme: "blue", // Change to "green", "blue", "purple", "orange", or "red"
    font: "Poppins"
},
```

Alternatively, you can use the theme switcher on the website itself by clicking the gear icon in the header.

## How to Add Your Photo

To add or change your profile photo:

1. Name your photo `profile.jpg`
2. Place it in the `images/` folder (replace the existing file if there is one)
3. Make sure the image is a square format for best results

## Deployment to GitHub Pages

After updating your content, you can deploy your portfolio to GitHub Pages:

1. Create a GitHub account if you don't have one
2. Create a new repository named `yourusername.github.io` (replace "yourusername" with your GitHub username)
3. Upload all the files from your portfolio to this repository
4. Your site will be available at `https://yourusername.github.io`

For more detailed instructions on using GitHub Pages, see the README.md file.

## Need More Help?

If you need to make more advanced changes, consider:

1. Looking at the HTML examples in each section file
2. Using online HTML tutorials to understand the code structure
3. Asking a friend with web development experience

Remember to always back up your files before making changes! 