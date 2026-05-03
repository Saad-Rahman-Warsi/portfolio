import { Container, Row, Col, Card, Button, Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from "react-icons/fa";
import resume from '../files/resume.pdf';

const Home = () => {
  return (
    <div>
      {/* About Section */}
      <Container id="about" className="my-5">
        <h2>About Me</h2>
        <ul>
          <li>I am a Software Developer with hands‑on experience building and supporting backend, cloud, 
          and data‑driven systems in SaaS environments. </li>
  
          <li> I am currently working full‑time at Agriculture and Agri‑Food Canada (AAFC) following graduation, 
          where I contribute to backend services, automated data pipelines, and containerized deployments 
          used in research and analytics workflows. </li>
  
          <li> My experience spans AAFC, Canada Revenue Agency (CRA), and CNW Group (Cision), where I’ve 
          worked with Java, Python, REST APIs, Docker, Kubernetes, GCP, and SQL databases in Agile teams. 
          I enjoy writing clean, reliable code and contributing to systems that need to be scalable, 
          secure, and dependable. </li>
  
          <li> I am authorized to work full‑time in Canada (PGWP) and hold Reliability Security Clearance. 
          I am open to Software Developer, Application Developer, Backend Developer, Systems Analyst, 
          and QA Automation roles across Canada, including contract and permanent opportunities. </li>
  
          <li>Tech stack: Java, Python, Spring Boot, REST APIs, Docker, Kubernetes, GCP, Azure, PostgreSQL, 
            CI/CD, Angular, React, Agile </li>

          <li>Open to relocation and onsite opportunities across Canada. </li>

        </ul>
      </Container>

      {/* Experience Section */}
      <Container id="experience" className="my-5">
        <h2>Experience <Button variant="outline-primary" as={Link} to="/experience"> Experience Details </Button></h2>
        <ul>
          <li>Casual Worker (Full Time), Agriculture and Agri-Food Canada (AAFC), Ottawa (From Jan 2026 to Present).</li>
          <li>Student FSWEP (Part Time), Agriculture and Agri-Food Canada (AAFC), Ottawa (From Aug 2025 to Dec 2025).</li>
          <li>Student FSWEP (Coop, Full Time), Agriculture and Agri-Food Canada (AAFC), Ottawa (From May 2025 to Aug 2025).</li>
          <li>Student FSWEP (Part Time), Agriculture and Agri-Food Canada (AAFC), Ottawa (From Sep 2024 to Apr 2025).</li>
          <li>Student Co-op, Agriculture and Agri-Food Canada (AAFC), Ottawa (From May 2024 to Aug 2024).</li>
          <li>IT Programmer Analyst, Canada Revenue Agency (CRA), Ottawa (From Sep 2023 to Dec 2023).</li>
          <li>Software Developer Intern, CNW Group Ltd. - Cision, Ottawa (From Jan 2023 to Apr 2023).</li>
        </ul>
      </Container>

      {/* Education Section */}
      <Container id="education" className="my-5">
        <h2>Education <Button variant="outline-primary" as={Link} to="/education"> Education Details </Button> </h2>
        <ul>
          <li> <b>Bachelor of Applied Science in Software Engineering (CO-OP) University of Ottawa(CGPA : 9.55)</b> (2021-25).</li>
          <li>Dean’s Honour List (2021–2025)</li>
          <li>University Merit Scholarship (2021–2025)</li>
          <li>Scored 10/10 TGPA in Fall 2021, Winter 2022 and Winter 2025.</li>
        </ul>
      </Container>

      {/* Projects Section */}
      <Container id="projects" className="my-5">
        <h2>Projects Summary <Button variant="outline-primary" as={Link} to="/projects"> Project Details </Button></h2>
        <h5>DevOps Projects</h5>
        <ul>
          <li> <b>Enhancement of PharmFinder: Pharmacy Recruitment Platform for DPR Group Inc.:</b>
          Collaborated in a five-member agile team to enhance PharmFinder, the recruitment platform used 
          by D’Angelo Pharmacy Recruitment Group (DPR Group Inc.), Canada’s leading pharmacy talent acquisition 
          firm. I contributed to the DevOps requirements of the project by configuring and managing 
          Kubernetes clusters.</li>
        </ul>
        <h5>Web Projects</h5>
        <ul>
          <li> <a href="https://mathgraphics-9edbf.web.app/">Mathemagical Shapeplay</a>: Devloped an interactive web project that generates beautiful animations
              and patterns derived from mathematical equations </li>
          <li>Designed some web user interfaces using HTML, CSS, JavaScript, Bootstrap & React viz.
            (i) <a href="https://saad-rahman-warsi.github.io/splanet/">SciPlanet</a> offering scientific laboratories to the public
            (ii) <a href="https://saad-rahman-warsi.github.io/careerjump">CareerJump</a> offering mock interviews, group discussions, aptitude tests and personality
            development sessions
          </li>
        </ul>
        <h5>Testing Projects</h5>
        <ul>
          <li>As a team of four members, worked on an extensive testing project to test the web application “Online Book
            Store,” encompassing test case design, coverage analysis, performance testing, mutation testing, etc.
          </li>
          <li>Throughout the Quality Assurance course, was actively engaged in numerous assignments, proficiently utilizing a
            range of cutting-edge testing tools including Selenium, JMH, IntelliJ Code Coverage, EasyMock, and PitTest</li>
        </ul>
        <h5>App Development Projects</h5>
        <ul>
          <li>Developed a city-based food sharing application called “Mealer” for Android using Java, Firebase & Git where local
            cooks can sell meals to clients from their homes. This was a six member group project.
          </li>
          <li>Developed Android Apps for Calculator and another which maintains multiple timers used as a cooking timer.</li>
        </ul>
      </Container>

      {/* Achievements Section */}
      <Container id="other" className="my-5">
        <h2>Other</h2>
        <ul>
          <li><b>Other Technical Experience</b>
            <ul>
              <li>Participated in uOttaHack-5 hackathon (Feb 10-12, 2023) and presented the project Earthquake Disaster
Management using the Solace cloud to help the earthquake victims</li>
              <li>Designed and simulated several combinational and sequential circuits using Intel Quartus software</li>
              <li>Learned basics of Arduino by making following Arduino UNO based models: Blinking LED and LED Flowing Lights</li>
            </ul>
          </li>
          <li><b>Volunteer Experience: </b> Held MAT1320 Final exam prep session for Learning for Charity, Ottawa, ON </li>
          <li><b> Extra-Curricular Activities </b>
            <ul>
              <li>Ex-Member of uOttawa Software Engineering Students Association and held the post of VP Academics</li>
              <li>Content Creation: Educational & Travel content creation on YouTube</li>
            </ul>
          </li>
        </ul>
      </Container>

      {/* Resume Section */}
      <Container id="resume" className="my-5 text-center">
        <h2>Resume</h2>
        <Button variant="outline-primary" href={resume} target="_blank">
          Download Resume
        </Button>
      </Container>

      {/* Contact Section */}
      <Container id="contact" className="my-5 text-center">
        <h2>Contact</h2>
        <p>Feel free to connect with me through the following platforms:</p>
        <div className="d-flex justify-content-center gap-4 fs-3 flex-wrap">
          <a href="mailto:saadrahmanwarsi@gmail.com" className="text-dark">
            <FaEnvelope />
          </a>
          <a href="https://github.com/Saad-Rahman-Warsi/" className="text-dark">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/saad-rahman-warsi/" className="text-dark">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@saadrahmanwarsi1953" className="text-dark">
            <FaYoutube />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Home;
