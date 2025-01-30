import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">MoviesNoir</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/generator">Movie Generator</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation; 