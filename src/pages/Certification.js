
import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";

const Certification = () => {
  const certificates = [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      img: "/images/azure_saad.jpg",
      description: "Earned Microsoft Certified: Azure Fundamentals credential.",
      linkCert: "https://learn.microsoft.com/en-us/users/saadrahmanwarsi-1954/credentials/b632ecc8ee30198a"
    },
    {
      title: "Professional Scrum Master (PSM I) Certification",
      img: "/images/psm_saad.jpg",
      description: "Certified Professional Scrum Master I by Scrum.org.",
      linkCert: "https://www.credly.com/badges/077fdb14-9ec0-4476-91a0-f8f97c2574e6/linked_in?t=s5zuls"
    }
  ];

  const [show, setShow] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleShow = (cert) => {
    setSelectedCert(cert);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedCert(null);
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Certifications</h1>
      <Row>
        {certificates.map((cert, idx) => (
          <Col key={idx} md={6} sm={12} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src={cert.img}
                style={{ cursor: "pointer" }}
                onClick={() => handleShow(cert)}
              />
              <Card.Body>
                <Card.Title>{cert.title}</Card.Title>
                <Card.Text>{cert.description} <br/> <a href={cert.linkCert} target="_blank">Online certificate link for verification</a> <br/>
                  <small><small>Click the Certificate to enlarge.</small></small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for enlarged certificate */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedCert?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedCert && (
            <img
              src={selectedCert.img}
              alt={selectedCert.title}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Certification;

