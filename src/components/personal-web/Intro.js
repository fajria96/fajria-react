import { Container, Col, Row, Button } from "react-bootstrap";

const Intro = () => {
    return(
<div className="intro">
          <Container className="text-white d-flex justify-content-right">
            <Row>
              <Col>
                <div className="title-1">Hi, my name is</div>
                <div className="title-2">Fajriatun Munawaroh.</div>
                <p>
                  I am a full stack developer, I have a strong background in
                  various programming languages and frameworks such as
                  Javascript, CSS, HTML, React.js, Node.Js, Express.js, and
                  MongoDB.
                </p>
                <div className="introButton text-right">
                <Button variant="outline-success">Check out my porto!</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro