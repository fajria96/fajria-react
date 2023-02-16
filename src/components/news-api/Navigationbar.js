import { Navbar, Container} from "react-bootstrap";

function Navigationbar() {
  return (
    <div className="container-fluid">
    <Navbar>
      <Container>
        <Navbar.Brand href="#home"><h2 style={{color:"darkblue"}}><b>BERITAkita</b></h2></Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  );
}


export default Navigationbar;
