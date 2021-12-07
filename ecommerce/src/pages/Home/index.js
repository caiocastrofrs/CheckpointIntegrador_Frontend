import "./style.scss";
import CarouselComponent from '../../components/Carousel';
import Categorias from '../../components/Categorias';
import { Helmet } from 'react-helmet';

const Home = () => {
  
  return (
    <>
      <Helmet>
        <title>Bodega | Home</title>
      </Helmet>
      <CarouselComponent />
      <Categorias />
    </>
  );
};

export default Home;
