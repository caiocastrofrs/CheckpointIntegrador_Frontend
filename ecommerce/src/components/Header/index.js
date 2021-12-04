import "./style.scss";
import { Navbar, Container, Nav} from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
 
const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" id="header">
        <Container>
          <Navbar.Brand><img src={Logo} alt="logo" className="logo img-fluid"/></Navbar.Brand>
          <Navbar.Toggle className="navbar-toggle" aria-controls="basic-navbar-nav" />
          <Link to="/carrinho">
          <div className="div-carrinho">
            <span className="qntd-item">20</span>
            <AiOutlineShoppingCart className="carrinho-icon" size="36" />
          </div>
          </Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <Link to="/">
                <Nav.Item>Home</Nav.Item>
              </Link>

              <Link to="/produtos">
                <Nav.Item>Produtos</Nav.Item>
              </Link> 

              <Link to="/sobre">
                <Nav.Item>Sobre nós</Nav.Item>
              </Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
