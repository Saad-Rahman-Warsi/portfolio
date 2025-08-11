import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      title: "Enhancement of PharmFinder: Pharmacy Recruitment Platform for DPR Group Inc.",
      image: "/images/blank.jpg",
      description: `
        Collaborated in a six-member agile team to enhance PharmFinder, the recruitment platform used by D’Angelo Pharmacy Recruitment Group (DPR Group Inc.), Canada’s leading pharmacy talent acquisition firm. Contributed to DevOps requirements by configuring and managing Kubernetes clusters. Worked with a React front end, Java Spring Boot backend, and PostgreSQL database. Utilized GitHub for version control and Confluence + Jira for project documentation.
      `,
      tech: ["DevOps", "Kubernetes", "React", "Spring Boot", "PostgreSQL", "Github", "Jira"],
      link: ""
    },
    {
      title: "UI Development for a Public Scientific Laboratory Sci-Planet",
      image: "/images/sciplanet.png",
      description: `
        Developed a modern, user-friendly interface for Sci-Planet, a prototype public laboratory that offers paid scientific services to individuals and organizations. Applied contemporary UI development practices to create an intuitive, responsive and bilingual interface supporting both English and French. A key feature includes the "Explore" menu, enabling users to dynamically filter and expand/collapse the list of laboratories based on selected parameters, enhancing navigation and discoverability.
      `,
      tech: ["React", "Bootstrap", "JavaScript"],
      link: "https://saad-rahman-warsi.github.io/splanet/"
    },
    {
      title: "UI Development for CareerJump – Prototype Career Services Platform",
      image: "/images/careerjump.png",
      description: `
        Designed and developed the user interface for CareerJump, a prototype career services platform offering mock interviews, group discussions, aptitude tests, and personality development sessions. Applied modern UI development practices to create a responsive, intuitive, and visually engaging interface that enhances user experience and accessibility.
      `,
      tech: ["React", "Bootstrap", "JavaScript"],
      link: "https://saad-rahman-warsi.github.io/careerjump"
    },
    {
      title: "Comprehensive Software Testing of the Web Application: Online Book Store",
      image: "/images/blank.jpg",
      description: `
        Collaborated in a four-member team to perform extensive testing on an Online Book Store application, applying multiple black-box, white-box, and performance testing techniques to ensure functionality, reliability, and efficiency. Conducted:1) Graph Coverage and Logic Coverage to verify control flow and decision paths 2)Input Space Partitioning and Syntax-Based Testing to validate input handling and robustness 3) Mutation Testing using PITest to assess test suite effectiveness 4) Performance Testing using JMH to measure application speed and resource usage.
      `,
      tech: ["JUnit", "Selenium", "JMH", "PITest", "Mockito", "JaCoCo"],
      link: ""
    }
  ];

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Project Details</h1>
      {projects.map((project, index) => (
        <Card className="mb-4 shadow-sm" key={index}>
          <Row className="g-0">
            <Col md={4}>
              <Card.Img
                src={project.image}
                alt={project.title}
                className="h-60 w-100"
                style={{ objectFit: "cover" }}
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text style={{ whiteSpace: "pre-line" }}>
                  {project.description}
                </Card.Text>
                <div className="mb-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="badge bg-primary me-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <Button
                    variant="outline-primary"
                    href={project.link}
                    target="_blank"
                  >
                    View Project
                  </Button>
                )}
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
};

export default Projects;
