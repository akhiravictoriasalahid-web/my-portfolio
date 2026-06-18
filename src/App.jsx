import Portfolio from "./Pages/Portfolio.jsx";
import Contact from "./Components/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
import profileImage from "./assets/profileimage.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
    <Navbar />
    
    <main>
      <section id="home" className="hero section-card">

        <div className="hero-image">
          <img src={profileImage} alt="Akhira" />
        </div>

        <div className="hero-content">
          <p>Hi, I'm</p>
          <h1>Junie Victoria Salahid</h1>
          <h2>Front-end Developer</h2>
          <p>
            I build responsive and user-friendly web interfaces
            with a focus on clean design and great user experience.
          </p>

          <div className="hero-icons">
            <a 
              href="https://github.com/akhiravictoriasalahid-web"
              target="_blank"
              rel="noreferrer"
              >
                <FaGithub />
            </a>

            <a 
              href="https://www.linkedin.com/in/junie-victoria-salahid-776285177/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              >
                <FaLinkedin />                
            </a>
          </div>

          <div className="hero-buttons">
            <a href="#portfolio">View Projects</a>
            <a href="#contact">Contact Me</a>
          </div>

        </div>
      </section>

      <section id="about" className="section-card">
        <div className="about-left">
          <h2>About</h2>
          <p>Hi, I'm Junie — a Front-end Developer who builds responsive and modern websites.</p>
        
          <p>I specialize in converting Figma designs into clean, responsive, and functional websites using HTML, CSS, and Sass.</p>
        
          <p>I enjoy creating user-friendly interfaces and turning design concepts into real web experiences.</p>
        
          <p>I'm continuously improving my skills in JavaScript, React and always eager to learn and grow as a developer.</p>
        
          <p>I'm open to freelance opportunities and excited to work on real-world projects.</p>
        </div>

        <div className="about-right">
          <p><strong>Name:</strong> Junie Victoria Salahid</p>
          <p><strong>Location:</strong> Hässleholm, Sweden</p>
          <p><strong>Availability: </strong> 
              Available for Front-end Developer roles, freelance projects, and internship opportunities.
          </p>
          <p><strong>Contact:</strong> Please send me a message using the contact form below.</p>
        </div>
      </section>

      <section id="skills" className="section-card">
        <h2>My Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>HTML5</h3>
            <p>95%</p>
          </div>
          
          <div className="skill-card">
            <h3>CSS3</h3>
            <p>90%</p>
          </div>

          <div className="skill-card">
            <h3>SCSS</h3>
            <p>85%</p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>75%</p>
          </div>

          <div className="skill-card">
            <h3>React</h3>
            <p>75%</p>
          </div>

          <div className="skill-card">
            <h3>Git & GitHub</h3>
            <p>85%</p>
          </div>

        </div>
      </section>

      <section id="experience" className="section-card">
        <h2>Work Experience</h2>
        
        <div className="experience-card">
          <h3>Wipro BPO Philippines Limited | May 12,2017 - Mar.27,2019</h3>
          <p>BestBuy / CSA</p>
          <ul>
            <li>Assisted customers with plan renewals, cancellations, and inquiries.</li>
            <li>Scheduled appointments and handled account-related concerns.</li>
            <li>Processed refunds and resolved issues efficiently</li>
            <li>Maintained strong attention to detail in handling customer data.</li>
          </ul>
        </div>

        <div className="experience-card">
          <h3>The Results Companies. Philippines | Aug.8, 2016 – Feb.28, 2017</h3>
          <p>Target Retail / CSR</p>
          <ul>
            <li>Managed customer orders, status inquiries, and product concerns.</li>
            <li>Processed refunds and replacements with a focus on customer satisfaction.</li>
            <li>Applied strong communication and problem-solving skills.</li>
          </ul>
        </div>

        <div className="experience-card">
          <h3>Sykes Asia Inc. Philippines | Feb.8, 2016 - July 31, 2016</h3>
          <p>Frontier Communication / CSR / TSR</p>
          <ul>
            <li>Assisted with billing, payments, and account adjustments.</li>
            <li>Provided basic technical troubleshooting for customer issues.</li>
            <li>Delivered clear communication and effective resolutions.</li>
          </ul>
        </div>
      </section>

      <section id="portfolio" className="section-card">
        <Portfolio />
      </section>

        <Contact />
  
    </main>
 
    </>
  )

}

export default App;
