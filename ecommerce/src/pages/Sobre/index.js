import "./style.scss";
import Equipe from '../../components/Equipe';
import { Helmet } from 'react-helmet';

const Sobre = () => {

  return (
    <>
      <Helmet>
        <title>Bodega | Sobre nós</title>
      </Helmet>
      <Equipe />
    </>
  );
};

export default Sobre;
