import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <div className="Banner">
      <Container>
        <Row>
          <Col>
            <div className="title-1">NEVER STOP EXPLORING THE WORLD.</div>
            <p className="title-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati
            </p>
            <button className="btn-banner"> LEARN MORE </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Header;
