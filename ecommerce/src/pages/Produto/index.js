/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';
import { Helmet } from 'react-helmet'
import CardProduto from '../../components/CardProduto';
import { useParams } from 'react-router';
import { useState, useEffect, useCallback } from 'react';
import api from '../../service/api'

const Produto = () => {

    const [produto, setProduto] = useState({});
    const [produtosCatg, setProdutosCatg] = useState([]);

    const { id } = useParams();

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

    // const preco = produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    useEffect(() => {
        loadData();
        // console.log(produto.preco)
    }, [loadData])

    const parcela = 12;
    function calcParcela() {
        return (produto.preco / parcela).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <>
            <Helmet>
                <title>Bodega | Produto</title>
            </Helmet>
            <h2 className="title"> {produto.titulo} </h2>
            <div className="container_produto">
                <div className="container_imagem">
                    <img style={{
                        maxWidth: '400px',
                        maxHeight: '400px',
                        width: 'auto',
                        height: 'auto',
                    }} src={produto.imagem} alt={produto.titulo} />
                </div>
                <div className="container_descricao">
                    <div className="container_precoDesconto">
                        <p className="preco">{produto.preco}</p>
                        <p className="desconto">20% off</p>
                    </div>
                    <p className="dozeVezes">{parcela}x{calcParcela()} sem juros</p>
                    <p className="freteGratis">Frete Grátis</p>
                    <p className="descricao">{produto.descricao}</p>

                    <div className="container_botao">
                        <a className="buttonComprar" href="#">Comprar agora</a>
                    </div>

                    <div className="container_botao">
                        <a type="submit" className="buttonAdicionar" href="#">Adicionar ao carrinho</a>
                    </div>

                </div>
            </div>

            <p className="quemViu">Quem viu esse produto também comprou...</p>
            <div className="conatiner-sugeridos">
                {
                    produtosCatg.map((item, index) => {
                        var itemOpaco = 'item-opaco'
                        return (
                            <div className={
                                index >= 3 ? itemOpaco : ''
                            }
                            >
                                <CardProduto
                                    key={item.id}
                                    produto={item}
                                />
                            </div>
                        )
                    }
                    )}
            </div>
        </>
    );

}

export default Produto;