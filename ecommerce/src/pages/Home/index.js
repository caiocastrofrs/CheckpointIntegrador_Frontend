import "./style.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBar from '../../components/SearchBar';
import CarouselComponent from '../../components/Carousel';
import Categorias from '../../components/Categorias';
import api from '../../service/api';
import { useState, useEffect } from 'react';
import {useCallback} from 'react';
const Home = () => {

  const [dados, setDados] = useState();
  
  const loadData = useCallback(() => {
    (async function loadDataa() {
      try {
        const response = await api.get(`/produtos`);
        setDados(response);
      } catch(error) {
        console.log(error);
      }
    })()
  },[]);

  useEffect(() => {
    loadData();
  },[loadData])

  console.log(dados);
  return (
    <>
      <Header />
      <SearchBar />
      <CarouselComponent />
      <Categorias />
      <Footer />
    </>
  );
};

export default Home;
