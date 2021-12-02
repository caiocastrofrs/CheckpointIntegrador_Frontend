import "./style.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBar from '../../components/SearchBar';
import CarouselComponent from '../../components/Carousel';
import api from '../../service/api';
import { useState, useEffect } from 'react';

const Home = () => {

  const [dados, setDados] = useState();
  
  useEffect(() => {
    (async function loadData() {
      try {
        const response = await api.get(`/produtos`);
        setDados(response);
      } catch(error) {
        console.log(error);
      }
    })()
  },[dados])

  console.log(dados);
  return (
    <>
      <Header />
      <SearchBar />
      <CarouselComponent />
      <Footer />
    </>
  );
};

export default Home;
