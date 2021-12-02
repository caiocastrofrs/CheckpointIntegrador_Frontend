import { Link } from 'react-router-dom';
import './style.scss'


const Footer = () => {
  return (
    <>
      <footer className="py-3 my-4">
        <div className="text-end mx-3">
            <a className="text-decoration-none" href="#header">voltar ao topo</a>
        </div>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              Produtos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              Carrinho
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              Sobre nós
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">© 2021 Company, Inc</p>
      </footer>
    </>
  );
};

export default Footer;