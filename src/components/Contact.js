import { Container, Col, Row, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <Container className="text-white d-flex justify-content-center">
        <Row>
          <Col>
            <h1>Contact Me</h1>
            <p>
            I'm currently looking for any new opportunities
            </p>
            <Button variant="outline-success">Find me on Linkedin!</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
