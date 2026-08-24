import { Container, Row, Col, Card, Button, Navbar, Nav, Image } from "react-bootstrap";

const Experience = () => {
  return (
    <div>
      <Container className="my-5">
        <h1 className="mb-4">Experience</h1>
        <Card className="bg-light">
          <Card.Body>
            <Card.Title>Agriculture and Agri-Food Canada (AAFC)</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Research Assistant (Current Position), From May 2024 - Jun 2026, Aug 2026 - Present  <br />
            </Card.Subtitle>
            <Card.Text>

            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <ul>
          <li>Developed and maintained backend services supporting research and analytics workflows.</li>
          <li>Built genomic data storage solutions using SQLite, PostgreSQL and TileDB.</li>
          <li>Deployed software tool PHG, which could potentially reduce per-sample processing costs from $500 → $15, scaling predictions from 300K → 34M at 92% accuracy using PostgreSQL, Docker, Singularity, and automated shell workflows.</li>
          <li>Achieved 98% & 92% imputation accuracy on large and complex genomic datasets of 2 crops.</li>
          <li>Engineered fully automated shell scripts and Slurm pipeline with dependency chaining, reducing manual effort and enabling overnight unattended runs, reducing effort by 70%.</li>
          <li>Operated on HPC infrastructure managing 100 TB of storage, optimizing workflows for large-scale genomic datasets.</li>
          <li>Developed containerized deployments ensuring reproducibility and portability across compute environments using Docker and Singularity.</li>
        </ul>
      </Container>

      <Container className="my-5">
        <Card className="bg-light">
          <Card.Body>
            <Card.Title>Canada Revenue Agency (CRA) (AAFC)</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">IT Programmer/Analyst Sep 2023- Dec 2023
            </Card.Subtitle>
            <Card.Text>

            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <ul>
          <li>Developed DevHub, an internal collaborative platform, using Java, Spring Boot, Angular, Node.JS, and PostgreSQL, improving peer collaboration and issue resolution.</li>
          <li>Designed and developed OCBusTracker, a microservices-based web application with Angular frontend, containerized with Docker and deployed on OpenShift.</li>
          <li>Acted as Scrum Master for a sprint; enhanced Docker training curriculum and gained experience in Agile methodologies using JIRA.</li>
          <li>Collaborated with cross-functional teams to meet government standards.</li>
        </ul>
      </Container>

      <Container className="my-5">
        <Card className="bg-light">
          <Card.Body>
            <Card.Title>CNW Group Ltd. - Cision</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Software Developer Intern Jan 2023- April 2023
            </Card.Subtitle>
            <Card.Text>

            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <ul>
          <li>Worked on Content Ingestion project responsible for data ingestion, enrichment, and delivery to output pipeline for analysis and operations.</li>
          <li>Implemented automated alerting for build failures, significantly cutting downtime and response time.</li>
          <li>Maintained cloud-based data streaming and supported migration to Google Cloud Platform (GCP).</li>
          <li>Resolved 4+ critical build issues, fixed a stream giving errors, tested a key component, and customized GCP.</li>
          <li>Strengthened application reliability through code reviews and debugging; worked in Agile teams using Git, Jira, and Confluence.</li>
        </ul>
      </Container>
    </div>
  );
};

export default Experience;
