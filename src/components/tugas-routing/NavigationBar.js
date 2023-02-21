import { Navbar, Container, Nav} from "react-bootstrap";

const NavigationBar = () => {
  
  return (
    <div className="navbar-1">
      <Navbar>
        <Container>
          <Nav>
            <Navbar.Brand href="/"><h2 style={{color: "white"}}><strong>TRAVEL.CO</strong></h2></Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;