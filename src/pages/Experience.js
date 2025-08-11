import { Container, Row, Col, Card, Button, Navbar, Nav, Image } from "react-bootstrap";

const Experience = () => {
  return (
    <div>
      <Container className="my-5">
        <h1 className="mb-4">Experience</h1>
        <Card className="bg-light">
          <Card.Body>
            <Card.Title>Agriculture and Agri-Food Canada (AAFC)</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Student FSWEP, From May 2025 to Aug 2025 (Co-op, Full Time) <br />
              Student FSWEP, From Sep 2024 to Apr 2025 (Part Time) <br />
              Student Co-op, From May 2024 to Aug 2024 (Co-op, Full Time)
            </Card.Subtitle>
            <Card.Text>

            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <ul>
          <li>Containerized bioinformatics software Practical Haplotype Graph (PHG) version 2 using Singularity, enabling
            consistent and portable deployments in cloud environments.</li>
          <li>Implemented bioinformatics data processing pipelines, integrating tools like PHG using Slurm.</li>
          <li>Executed large-scale data computations on High-Performance Computing (HPC) clusters in processing complex
            bioinformatics workloads, and engineered data migration solutions between HPC clusters (BioCluster to GPSC)</li>
          <li>Created docker image of PHG v2.</li>
          <li>Established PHG v1 and v2 on BioCluster & GPSC.</li>
          <li>Established tools like GATK, VCFtools and PLINK using Singularity</li>
          <li>Transferred huge data from one cluster to another</li>
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
          <li>Developed skills in DevOps, Angular, MicroServices, Containers, Docker & Kubernetes, OpenShift, Scrum and
            Microsoft Azure.</li>
          <li>Gained experience in Agile methodologies using tools such as JIRA. Acted as Scrum Master for a sprint. Also
            enhanced the Docker training curriculum.</li>
          <li>Designed & developed a web application OCBusTracker using the Microservices architecture with an angular front
            end. Then containerized it within Docker and also deployed it on Openshift.</li>
          <li>Developed a web project DevHub using Angular, NodeJS and PostgreSQL to be used as an internal collaborative
            platform amongst peers.</li>
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
          <li>Worked in Content Ingestion on a project which was responsible for data ingestion, enrichment, and delivery of
            data to the output pipeline for data analysis or operations</li>
          <li>Maintenance of Cloud -based data streaming and it’s migration to the Google Cloud Platform (GCP)</li>
          <li>Performed troubleshooting of build issues and resolved them, fixed errors, tested a few components, and did
            some customizations for GCP</li>
        </ul>
      </Container>
    </div>
  );
};

export default Experience;
