// src/pages/Education.jsx
import React from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import transcript from '../files/transcript.pdf';

const transcriptFile = "${process.env.PUBLIC_URL}/files/transcript.pdf"; // Place transcript in public/files/

// Certificates array — replace paths with actual image locations in public/certificates/
const certificates = [
  require('../images/certificates/certificate1.png'),
  require('../images/certificates/certificate2.png'),
  require('../images/certificates/certificate3.png'),
  require('../images/certificates/certificate4.png'),
  require('../images/certificates/certificate5.png'),
  require('../images/certificates/certificate6.png'),
  require('../images/certificates/certificate7.png'),
  require('../images/certificates/certificate8.png'),
  require('../images/certificates/certificate9.png'),
  require('../images/certificates/certificate10.png'),
];

export default function Education() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">My Education</h1>

      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>Bachelor of Applied Science in Software Engineering (CO-OP)</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                University of Ottawa, Canada
              </Card.Subtitle>
              <p>
                <strong>CGPA:</strong> 9.57 / 10.0
              </p>
              <p>
                <strong>Expected to Complete Study by:</strong> December 31, 2025
              </p>
              <ul>
                <li>Scored 10/10 TGPA in Fall 2021, Winter 2022 and Winter 2025.</li>
                <li>Achieved Dean's Honour List recognition for every academic term in uOttawa</li>
                <li>Received Merit Scholarship (International Student) for 2021, 2022, 2023 and 2024</li>
              </ul>
              <Button variant="primary" href={transcript} download>
                📄 Download Transcript
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>Dean’s Honour List Certificates:</Card.Title>
              <Card.Text> <br/>    </Card.Text>
              <Carousel interval={null}>
                {certificates.map((src, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={src}
                      alt={`Dean's Honour List Certificate ${index + 1}`}
                      style={{ maxHeight: "400px", objectFit: "contain" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
