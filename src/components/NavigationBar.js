import { Navbar, Container, Nav, Button } from "react-bootstrap";

const NavigationBar = () => {
  
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Nav>
            <Navbar.Brand href="/">
              <b>FM</b>
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button variant="outline-success">Resume</Button>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
