import "./style.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
/* import SearchBar from '../../components/SearchBar'; */
import CarouselComponent from '../../components/Carousel';
import Categorias from '../../components/Categorias';
// import { useState, useEffect } from 'react';
// import {useCallback} from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {

  // const [dados, setDados] = useState();
  
  return (
    <>
      <Helmet>
        <title>Bodega | Home</title>
      </Helmet>
      <Header />
{/*       <SearchBar /> */}
      <CarouselComponent />
      <Categorias />
      <Footer />
    </>
  );
};

export default Home;
