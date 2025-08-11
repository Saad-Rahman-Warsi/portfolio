import { Container, Row, Col, Card, Button, Navbar, Nav, Image } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* About Section */}
      <Container id="about" className="my-5">
        <h2>About Me</h2>
        <p>
          I am a positive and self-motivated final-year BASc Software Engineering student at the 
          University of Ottawa, currently completing my full-time co-op term at Agriculture and 
          Agri-Food Canada (AAFC). With a strong foundation in programming, problem-solving, and 
          mathematics, I thrive in tackling complex and challenging assignments that demand both 
          analytical thinking and technical expertise. My professional journey spans enriching co-op 
          experiences at the Canada Revenue Agency (CRA), Cision, and AAFC, where I honed my skills 
          in cloud computing and web development. A quick learner by nature, I continuously push 
          myself to grow—embracing challenges as opportunities to innovate, adapt, and excel.

        </p>
      </Container>

      {/* Education Section */}
      <Container id="education" className="my-5">
        <h2>Education <Button variant="outline-primary" href="/education"> Education Details </Button> </h2>
        <ul>
          <li>Pursuing <b>Bachelor of Applied Science in Software Engineering (CO-OP) University of Ottawa(CGPA : 9.57).</b></li>
          <li>Expected to complete my studies in December 2025.</li>
          <li>Scored 10/10 TGPA in Fall 2021, Winter 2022 and Winter 2025.</li>
          <li>Achieved Dean's Honour List recognition for every academic term in uOttawa</li>
          <li>Received Merit Scholarship (International Student) for 2021, 2022, 2023 and 2024</li>
        </ul>
      </Container>

      {/* Experience Section */}
      <Container id="experience" className="my-5">
        <h2>Experience <Button variant="outline-primary" href="/experience"> Experience Details </Button></h2>
        <ul>
          <li>Student FSWEP (Coop, Full Time), Agriculture and Agri-Food Canada (AAFC), Ottawa (From May 2025 to Aug 2025).</li>
          <li>Student FSWEP (Part Time), Agriculture and Agri-Food Canada (AAFC), Ottawa (From Sep 2024 to Apr 2025).</li>
          <li>Student Co-op, Agriculture and Agri-Food Canada (AAFC), Ottawa (From May 2024 to Aug 2024).</li>
          <li>IT Programmer Analyst, Canada Revenue Agency (CRA), Ottawa (From Sep 2023 to Dec 2023).</li>
          <li>Software Developer Intern, CNW Group Ltd. - Cision, Ottawa (From Jan 2023 to Apr 2023).</li>
        </ul>
      </Container>

      {/* Projects Section */}
      <Container id="projects" className="my-5">
        <h2>Projects Summary <Button variant="outline-primary" href="/projects"> Project Details </Button></h2>
        <h5>DevOps Projects</h5>
        <ul>
          <li> <b>Enhancement of PharmFinder: Pharmacy Recruitment Platform for DPR Group Inc.:</b>
          Collaborated in a six-member agile team to enhance PharmFinder, the recruitment platform used 
          by D’Angelo Pharmacy Recruitment Group (DPR Group Inc.), Canada’s leading pharmacy talent acquisition 
          firm. I contributed to the DevOps requirements of the project by configuring and managing 
          Kubernetes clusters.</li>
        </ul>
        <h5>Web Projects</h5>
        <ul>
          <li>Designed some web user interfaces using HTML, CSS, JavaScript, Bootstrap & React viz.
            (i) “CareerJump” offering mock interviews, group discussions, aptitude tests and personality
            development sessions (ii) “SciPlanet” offering scientific laboratories to the public
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
        <Button variant="outline-primary" href="/resume.pdf" target="_blank">
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
