import "./style.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Equipe from '../../components/Equipe';
import { Helmet } from 'react-helmet';

const Sobre = () => {

  return (
    <>
      <Helmet>
        <title>Bodega | Sobre nós</title>
      </Helmet>
      <Header />
      <Equipe />
      <Footer />
    </>
  );
};

export default Sobre;
