import { useState } from "react";

import PortfolioCard from "../Components/PortfolioCard";
import BhromaonWebsite from "../assets/Bhromaon-website.png";
import AkhiraWebsite from "../assets/Akhira-website.png";
import TypingGame from "../assets/Typing-game.png";

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowProjects(true)}>
        Preview Projects
      </button>

      {showProjects && (

      <>
      <h1>My Portfolio</h1>

      <PortfolioCard
      name="Bhromaon Website"
      screenshots={BhromaonWebsite}
      tech="HTML5, CSS3, SCSS, FlexBox"
      description="The BHROMAON Travel Website is a modern and responsive landing page designed for a travel agency. It showcases destinations, services, and customer testimonials through a visually appealing layout. The project focuses on clean UI design, strong typography, and responsive user experience."
      what={[
        "Fully responsive design (desktop, tablet, mobile)",
        "Clean and modern UI",
        "Pixel-perfect conversion from Figma design",
        "Organized SCSS structure",
        "Smooth layout using Flexbox",
      ]}

      learned={[
        "Converting Figma design into real code",
        "Responsive design using media queries",
        "Layout techniques using Flexbox",
        "Structuring styles using SCSS",
      ]}

      role="I independently designed and developed the entire website, including layout, styling, and responsiveness."

      challenges={[
        "Responsive Layout: Adjusted sections like hero, steps, and testimonials for different screen sizes",
        "Background Image Handling: Ensured images scale properly without distortion",
        "Content Alignment: Used Flexbox to properly align text and images across sections",
        "UI Consistency: Maintained consistent colors, fonts, and spacing throughout the site",
        "SCSS Organization: Structured styles into multiple SCSS files for better maintainability"
      ]}

      github="https://github.com/akhiravictoriasalahid-web/Bhromaon-website"
      />

       <PortfolioCard
      name="Akhira Website"
      screenshots={AkhiraWebsite}
      tech="HTML, CSS, JavaScript(Basic)"
      description="This project is a personal portfolio website designed to showcase my skills, projects, and background as a front-end developer. The website features a clean and modern design with responsive layouts to ensure a smooth user experience across different devices."
      what={[
        "Displays personal introduction",
        "Shows information about me",
        "Highlights my projects",
        "Presents my resume in a structured layout",
        "Allows visitors to contact me through a contact page",
        "Includes a responsive navigation menu for mobile users",
      ]}

      learned={[
        "How to structure a multi-page website using HTML",
        "Styling layouts using Flexbox and CSS Grid",
        "Creating responsive designs with media queries",
        "Implementing a mobile navigation menu using JavaScript",
        "Organizing styles using SCSS",
        "Improving UI/UX design and consistency",
      ]}

      role="I independently designed and developed the entire website, including layout, styling, and functionality."

      challenges={[
        "Responsive Design: Ensured the layout works on desktop, tablet, and mobile using media queries",
        "Navigation Menu: Built a toggle dropdown menu for smaller screens using JavaScript",
        "Layout Structuring: Managed alignment and spacing using Flexbox and Grid",
        "Design Consistency: Maintained consistent colors, fonts, and spacing across all pages",
      ]}

      github="https://github.com/akhiravictoriasalahid-web/my-website"
      />

       <PortfolioCard
      name="Typing Speed Game"
      screenshots={TypingGame}
      tech="JavaScript (main functionality), HTML5 (pre-built), CSS3 (pre-built)"
      description="This project is a typing speed game where users type displayed words within a limited time. The game tracks the user’s score and adjusts difficulty levels dynamically. My contribution focused on implementing the game logic and interactivity using JavaScript."
      what={[
        "Displays a random word for the user to type",
        "Detects user input and checks if it matches the word",
        "Increases score for every correct word",
        "Adds time based on selected difficulty (easy, medium, hard)",
        "Counts down the timer continuously",
        "Ends the game when time reaches zero",
        "Allows users to restart the game",
      ]}

      learned={[
        "DOM manipulation (getElementById, innerText, events)",
        "Handling user input with event listeners",
        "Using setInterval() for real-time countdown",
        "Working with conditional logic (difficulty levels)",
        "Managing game state (score, time, random words)",
        "Creating dynamic UI updates using JavaScript",
      ]}

      role="I was responsible for developing the JavaScript functionality of the game, including the game logic, scoring system, timer, and difficulty settings. The HTML and CSS were provided, and I integrated my JavaScript code to make the game fully interactive."
      
      challenges={[
        "Timer Logic: Implemented a countdown system that updates every second",
        "Random Word Generation: Ensured words display randomly without repetition issues",
        "Real-time Input Checking: Compared user input instantly with the target word",
        "Difficulty Scaling: Adjusted time increments based on selected difficulty",
        "Game Over Handling: Displayed final score and restart option dynamically",
      ]}

      github="https://github.com/akhiravictoriasalahid-web/javascript7"
      />

      </>
      )}
    </div>
    
  );

}

export default Portfolio;
