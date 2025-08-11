import { Container, Row, Col, Card, Button, Navbar, Nav, Image } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import myPhoto from '../images/myphoto.jpg';
import resume from '../files/resume.pdf';


const Layout = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Saad Rahman Warsi </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/"> <FaHome /> </Nav.Link>
              <Nav.Link as={Link} to="/education">Education</Nav.Link>
              <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/certification">Certification</Nav.Link>
              <Nav.Link href={resume} target="_blank">Resume</Nav.Link>
              <Nav.Link as={HashLink} smooth to="/#other">Other</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header Section */}
      <header className="bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center text-center text-md-start g-4">
            {/* Profile Image */}
            <Col xs={12} md="auto">
              <Image
                src={myPhoto}
                roundedCircle
                fluid
                alt="Saad Rahman Warsi"
                style={{
                  maxWidth: "120px",
                  height: "auto",
                  objectFit: "cover",
                  border: "4px solid white",
                }}
              />
            </Col>

            {/* Name & Title */}
            <Col xs={12} md={8}>
              <h1 className="fs-3 fs-md-1">Saad Rahman Warsi</h1>
              <p className="fs-6 fs-md-5 mb-0">
                Software Engineer | Web Developer | Cloud Enthusiast
                <br />
                
                  Microsoft Certified: Azure Fundamentals, Professional Scrum Master I Certified
                
              </p>
            </Col>

            {/* Social Links */}
            <Col xs={12} md>
              <div className="d-flex justify-content-center justify-content-md-end gap-4 fs-4 flex-wrap">
                <a href="mailto:saadrahmanwarsi@gmail.com" className="text-white">
                  <FaEnvelope />
                </a>
                <a href="https://github.com/Saad-Rahman-Warsi/" className="text-white">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/saad-rahman-warsi/" className="text-white">
                  <FaLinkedin />
                </a>
                <a href="https://www.youtube.com/@saadrahmanwarsi1953" className="text-white">
                  <FaYoutube />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </header>


      <Outlet />

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} Saad Rahman Warsi. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;