import "./style.scss";
import { Navbar, Container, Nav} from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Logo from '../../assets/logo.png';
const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" id="header">
        <Container>
          <Navbar.Brand href="#home"><img src={Logo} alt="logo" className="logo img-fluid"/></Navbar.Brand>
          <div>
            <span className="qntd-item">1</span>
            <AiOutlineShoppingCart className="carrinho-icon" size="32" />
          </div>
          <Navbar.Toggle className="navbar-toggle" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#produtos">Produtos</Nav.Link>
              <Nav.Link href="#sobrenos">Sobre nós</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
