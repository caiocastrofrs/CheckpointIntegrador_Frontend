import './style.scss';
import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import api from '../../service/api'
import { BoxFilterCategoria } from '../../components/BoxFilterCategoria';
import { Row } from 'react-bootstrap';
import CardProduto from '../../components/CardProduto';
import { Container } from 'react-bootstrap';
import { Paginacao } from '../../components/Paginacao';
import { useParams, useNavigate } from 'react-router-dom';


const Produtos = () => {

  var { categoria } = useParams();

  
  const navigate = useNavigate();
  const [itensPorPagina, setitensPorPagina] = useState(10);
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [produtos, setProdutos] = useState([]);
  const [checkd, setCecked] = useState('');
  // const [categoria, setCategoria] = useState();

  const indexInicial = paginaAtual * itensPorPagina;
  const indexFinal = indexInicial + itensPorPagina;
  const qttExibir = produtos.slice(indexInicial, indexFinal);

  function verificarFiltro(categoria, checkd) {
    let url = `/produtos${checkd}`;
    if (categoria === undefined){
      url = `/produtos${checkd}`;
    }
    else if (`/produtos${checkd}` === '/produtos' && categoria !== undefined){
      url = `/produtos/categoria/${categoria}`;
      categoria = undefined;
    }
    else if (`/produtos${checkd}` !== '/produtos'
      && `/produtos${checkd}` !== `/produtos/categoria/${categoria.toLowerCase()}`) {
      url = `/produtos${checkd}`;
    }
    console.log(url)
    return url;
  }

  const loadData = useCallback(() => {
    (async function loadDataa() {
      try {
        const response = await api.get(verificarFiltro(categoria, checkd))
        // const response = await api.get( categoria === null ?  `/produtos/categoria/${categoria}` : `/produtos${checkd}`);
        setProdutos(response.data);
      } catch (error) {
        navigate('/404');
        console.log("Verifique sua conexão com a internet");
      }
    })()
  }, [categoria, checkd, navigate]);

  useEffect(() => {
    loadData();
  }, [loadData])


  useEffect(() => {
    setPaginaAtual(0)
  }, [itensPorPagina])

  useEffect(() => {
    categoria = undefined;
    // console.log(checkd);
    // console.log(categoria);
  }, [checkd])

  return (
    <>
      <Helmet>
        <title>Bodega | {checkd === '' ? 'Produtos'
          : (produtos[0].categoria.nomeCategoria)}

        </title>
      </Helmet>
      <main className="container-produtos m-auto col-xl-9">

        <BoxFilterCategoria
          setCecked={setCecked}
        />

        <h2 style={{ width: '100%', textAlign: 'center' }}>Produtos</h2>
        <Container fluid={true}>
          <Row className="linha-produtos">
            {
              qttExibir.map(item => {
                return (
                  <CardProduto key={item.id} produto={item} />
                )
              }
              )}
          </Row>
        </Container>
        <Paginacao
          qtdItens={itensPorPagina}
          setPaginaAtual={setPaginaAtual}
          setitensPorPagina={setitensPorPagina}
          numPaginas={Math.ceil(produtos.length / itensPorPagina)}
        />
      </main>
    </>
  );

}

export default Produtos;