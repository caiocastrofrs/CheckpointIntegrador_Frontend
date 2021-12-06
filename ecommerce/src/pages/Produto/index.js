/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';
import { Helmet } from 'react-helmet'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import CardProduto from '../../components/CardProduto';


const produtos = [
    {
        "id": 1,
        "titulo": "Ventilador de mesa Mondial",
        "preco": 186.0,
        "descricao": "VTX-40-8P turbo preto com 8 pás cor prata, 40cm de diâmetro 127V",
        "imagem": "https://http2.mlstatic.com/D_NQ_NP_619657-MLA43249276651_082020-O.webp",
        "categoria": {
            "id": 1,
            "nomeCategoria": "ELETRODOMESTICOS"
        }
    },
    {
        "id": 2,
        "titulo": "Máquina de lavar automática Electrolux",
        "preco": 1524.0,
        "descricao": "Essencial Care LES11 branca 11kg 127V",
        "imagem": "https://http2.mlstatic.com/D_NQ_NP_798413-MLA43117842453_082020-O.webp",
        "categoria": {
            "id": 1,
            "nomeCategoria": "ELETRODOMESTICOS"
        }
    },
    {
        "id": 3,
        "titulo": "Fogão de piso Brastemp",
        "preco": 1399.0,
        "descricao": "BFO4N gás engarrafado 4 queimadores inox 127V/220V porta com visor 61.5L",
        "imagem": "https://http2.mlstatic.com/D_NQ_NP_933744-MLA40243078530_122019-O.webp",
        "categoria": {
            "id": 1,
            "nomeCategoria": "ELETRODOMESTICOS"
        }
    }
]





const Produto = () => {

    
    const produto = [

        {
            "id": 1,
            "titulo": "Máquina de lavar automática Electrolux",
            "preco": 1524.0,
            "descricao": "Essencial Care LES11 branca 11kg 127V",
            "imagem": "https://http2.mlstatic.com/D_NQ_NP_798413-MLA43117842453_082020-O.webp",
            "categoria": {
                "id": 1,
                "nomeCategoria": "ELETRODOMESTICOS"
            }
        }
    ]

    const parcela = 12;
    function calcParcela() {
        return (produto.preco / parcela).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }



    return (
        <>
            <Helmet>
                <title>Bodega | Produto</title>
            </Helmet>
            <Header />
            <h2 className="title"> Console Xbox Series S 512gb </h2>
            {/* <h2 className="title"> {produto.titulo} </h2> */}
            <div className="container_produto">
                <div className="container_imagem">
                    <img className="imagem" src="https://http2.mlstatic.com/D_NQ_NP_939935-MLB48431344222_122021-O.webp" alt="" />
                    {/* <img className="imagem" src={produto.imagem} alt="" /> */}
                </div>
                <div className="container_descricao">
                    <div className="container_precoDesconto">
                        <p className="preco">R$ 2.499</p>
                        {/* <p className="preco">{produto.preco}</p> */}
                        <p className="desconto">20% off</p>
                    </div>
                    <p className="dozeVezes">12xR$124,92 sem juros</p>
                    {/* <p className="dozeVezes">{parcela}x{calcParcela()} sem juros</p> */}
                    <p className="freteGratis">Frete Grátis</p>
                    <p className="descricao">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas aspernatur cum tempore nihil necessitatibus explicabo, unde animi, </p>
                    {/* <p className="descricao">{produto.descricao}</p> */}

                    <div className="container_botao">
                        <a className="buttonComprar" href="#">Comprar agora</a>
                   </div>

                    <div className="container_botao">
                        <a type="submit" className="buttonAdicionar" href="#">Adicionar ao carrinho</a>
                    </div>

                </div>
            </div>

            <p className="quemViu">Quem viu esse produto também comprou...</p>
            <Container fluid={true}>

                <Row className="linha-produtos">

                    {
                        produtos.map(item => {
                            return (
                                <CardProduto key={item.id} produto={item} />
                            )
                        }
                        )}
                </Row>
            </Container>

            <Footer />
        </>
    );

}

export default Produto;