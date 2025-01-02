# ExpoFP 2025 Website

A modern React-based website for showcasing ExpoFP's latest features, statistics, and offerings.

## 📖 Table of Contents
1. [Getting Started](#getting-started)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Running the Project](#running-the-project)
6. [Build and Deployment](#build-and-deployment)

---

## 🚀 Getting Started

### Clone the Repository

Start by cloning the project to your local machine:
```bash
git clone https://github.com/sashashreyder/expofp2025.git
cd expofp2025

Install Dependencies
Make sure you have Node.js installed (version 16+ is recommended). Then, install the dependencies:

npm install

Start the Development Server
To view the website in development mode:

npm run dev
#The development server will run at http://localhost:5173.

🌟 Features
Dark Mode Toggle: Switch between light and dark themes.
Smooth Animations: Sections and elements animate into view when scrolled.
Responsive Design: Fully optimized for desktop and mobile devices.
Interactive Gallery: Display floor plans and event layouts interactively.
Statistics Counter: Animated counters for key metrics.
Custom Pricing Section: Highlighted plans with expandable details.
🛠️ Technologies Used
React: JavaScript library for building user interfaces.
Vite: Modern frontend build tool.
Bootstrap: Styling and responsiveness.
tsparticles: For interactive animations.
React-Bootstrap: Prebuilt components for easier styling.
CSS: For custom designs and animations.


├── public/               # Public assets like the favicon and index.html
├── src/                  # Main source folder
│   ├── assets/           # Media files (images, GIFs, etc.)
│   ├── components/       # Reusable React components
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles
│   ├── main.jsx          # Entry point for React
├── package.json          # Dependencies and project configuration
├── vite.config.js        # Vite configuration
├── README.md             # Project documentation

🏃‍♀️ Running the Project

Run the app in development mode:

npm run dev

Create a production build:

npm run build
#The built files will be located in the dist/ directory

To preview the production build:

npm run preview

🌍 Build and Deployment

If you want to include prebuilt files for direct use, ensure the dist/ folder is included in your repository after running:

npm run build









