import "./style.scss";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" id="header">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Produtos</Nav.Link>
              <Nav.Link href="#link">Sobre nós</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
