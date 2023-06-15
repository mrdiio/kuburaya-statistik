import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../public/kuburaya-logo.png';

export default function AppNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className={`shadow-sm bg-body sticky-top`}>
        <Container className="py-2">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="..." width={40} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/organization">
                Organisasi
              </Nav.Link>

              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
