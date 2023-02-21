import { Container, Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="card-home">
        <Col md={3}>
          <div class="card-1">
            <div class="card">
              <div class="card-details">
                <p class="text-title">BALI</p>
              </div>
              <button class="card-button">Visit here?</button>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div class="card-2">
            <div class="card">
              <div class="card-details">
                <p class="text-title">LOMBOK</p>
              </div>
              <button class="card-button">Visit here?</button>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div class="card-3">
            <div class="card">
              <div class="card-details">
                <p class="text-title">RAJA AMPAT</p>
              </div>
              <button class="card-button">Visit here?</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
