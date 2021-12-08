/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';
import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import CardProduto from '../../components/CardProduto';
import { useParams } from 'react-router';
import { useState, useEffect, useCallback, useContext } from 'react';
import api from '../../service/api'
import { Link } from 'react-router-dom';
// import useAxios from '../../components/hooks';
import { ProdutoContext } from '../../context/ProdutoContext';//

const Produto = () => {

    const { id } = useParams();
    const { adicionarProduto } = useContext(ProdutoContext);//

    // const produto = useAxios(`/produtos/${id}`);
    // const produtosCatg = useAxios(`/produtos/categoria/${produto.categoria.nomeCategoria}`)

    const [produto, setProduto] = useState({});
    const [produtosCatg, setProdutosCatg] = useState([]);

    const loadData = useCallback(() => {
        (async function loadDataa() {
            try {
                const response = await api.get(`/produtos/${id}`);
                setProduto(response.data);
                const responsePorCatg = await api.get(`/produtos/categoria/${response.data.categoria.nomeCategoria}`);
                setProdutosCatg(responsePorCatg.data)
            } catch (error) {
                console.log("Verifique sua conexão com a internet");
            }
        })()
    }, [id]);
  
    useEffect(() => {
        loadData();
    }, [loadData])
    
    // const preco = produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    const parcela = 12;
    function calcParcela() {
        return (produto.preco / parcela).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }



    return (
        <>
            <Helmet>
                <title>Bodega | Produto</title>
            </Helmet>
            {/* <h2 className="title"> Console Xbox Series S 512gb </h2> */}
            <h2 className="title"> {produto.titulo} </h2>
            <div className="container_produto">
                <div className="container_imagem">
                    {/* <img className="imagem" src="https://http2.mlstatic.com/D_NQ_NP_939935-MLB48431344222_122021-O.webp" alt="" /> */}
                    <img className="imagem" src={produto.imagem} alt="" />
                </div>
                <div className="container_descricao">
                    <div className="container_precoDesconto">
                        <p className="preco">R$ 2.499</p>
                        <p className="preco">{produto.preco}</p>
                        {/* <p className="desconto">20% off</p> */}
                    </div>
                    {/* <p className="dozeVezes">12xR$124,92 sem juros</p> */}
                    <p className="dozeVezes">{parcela}x{calcParcela()} sem juros</p>
                    <p className="freteGratis">Frete Grátis</p>
                    {/* <p className="descricao">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas aspernatur cum tempore nihil necessitatibus explicabo, unde animi, </p> */}
                    <p className="descricao">{produto.descricao}</p>

                    <div className="container_botao">
                        <a className="buttonComprar" href="#">Comprar agora</a>
                   </div>

                    <div className="container_botao">
                        <Link to={"/carrinho"} className="buttonAdicionar">Adicionar ao carrinho</Link>
                        {/* <a onClick={adicionarProduto(produto)} className="buttonAdicionar">Adicionar ao carrinho</a> */}
                    </div>

                </div>
            </div>

            <p className="quemViu">Quem viu esse produto também comprou...</p>
            <Container fluid={true}>

                <Row className="linha-produtos">

                    {
                        produtosCatg.map(item => {
                            return (
                                <CardProduto key={item.id} produto={item} />
                            )
                        }
                        )}
                </Row>
            </Container>
        </>
    );

}

export default Produto;