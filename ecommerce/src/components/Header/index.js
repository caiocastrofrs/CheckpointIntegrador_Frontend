import "./style.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" id="header">
        <Container className="header-container">
          <Navbar.Brand>
            <img src={Logo} alt="logo" className="logo img-fluid" />
          </Navbar.Brand>
          <Link to="/carrinho" className="header-container__link">
            <div className="header-container__link__div-carrinho posicao-carrinho">
              <span className="header-container__link__div-carrinho__qntd-item">20</span>
              <AiOutlineShoppingCart className="header-container__link__div-carrinho__icon"  />
            </div>
          </Link>
          <Navbar.Toggle
            className="navbar-toggle"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center nav-items">
              <Link to="/" className="header-container__link">
                <Nav.Item>Home</Nav.Item>
              </Link>

              <Link to="/produtos" className="header-container__link">
                <Nav.Item>Produtos</Nav.Item>
              </Link>

              <Link to="/sobre" className="header-container__link">
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
