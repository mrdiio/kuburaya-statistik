import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AppNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className={`shadow-sm bg-body sticky-top`}>
        <Container className="py-2">
          <Navbar.Brand as={Link} to="/">
            Kubu Raya
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
            </Nav>
            <Link
              to="#"
              className="btn btn-outline-primary d-flex mt-2 mt-md-0"
            >
              Login
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
