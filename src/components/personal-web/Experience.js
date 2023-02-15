import { Container, Col, Row } from "react-bootstrap";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <Container className="text-white d-flex justify-content-center">
        <Row>
          <Col>
            <h1>Experience</h1>
            <ol>
                <li>PT. ABC </li>
                <p> January (2022) - Present</p>
                <li>PT. Maju Jaya</li>
                <p> June (2021) - June (2022)</p>
                <li>PT. Suka Mulya</li>
                <p> May (2019) - October (2020)</p>
                <li>PT. Abadi Jaya</li>
                <p> January (2018) - June (2019)</p>
            </ol>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
