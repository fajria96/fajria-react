import { Container, Col, Row, Button } from "react-bootstrap";

const Contact = () => {
	return (
		<div className="contact" id="contact">
      <Container className="txt-all-contact">
        <Row>
          <Col>
            <h1 className="txt-contact">CONNECT WITH US</h1>
            <h1 className="txt-contact">AND GET SPECIAL OFFERS</h1>
            <br />
           <Button className="btn-subscribe"><span className="txt-subscribe">Subscribe</span><span>Thanks!</span></Button>
          </Col>
        </Row>
      </Container>
    </div>
	);
};

export default Contact;