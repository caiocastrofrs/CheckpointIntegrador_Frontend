import './style.scss';
import { useState, useEffect, useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ProdutoContext } from '../../context/ProdutoContext';

export const ItemCarrinho = ({ produto }) => {

    const { produtos, adicionarProduto, decrementar, removerProduto } = useContext(ProdutoContext);
    
    var quantidade = 0;
    // useEffect(() => {
        for (const prod of produtos) {
            if (prod.id === produto.id)
                quantidade += 1;
        }
    // }, [produtos])

    return (
        <div className="card mb-3 container-item-produto" >
            <div className="row g-0 div-item">
                <div className="col-md-4 mb-3 justify-content-center d-flex">
                    <Link to={`/produtos/${produto.id}`}>
                        <img src={produto.imagem}
                            className="img-card img-fluid rounded-start" alt={produto.titulo}
                        />
                    </Link>
                </div>
                <div className="col-md-2 mb-3 justify-content-center d-flex">
                    <button className="buttons-icons">
                        <AiOutlineMinus
                            onClick={() => decrementar(produto)}
                            size="20"
                        />
                    </button>
                    <input min="1" type="tel" name="LineQuantity" data-cy="line-quantity-input" className="input-quant" value={quantidade} />
                    <button className="buttons-icons">
                        <AiOutlinePlus
                            onClick={() => adicionarProduto(produto)}
                            size="20"
                        />
                    </button>
                </div>
                <div className="col-md-3 texto">
                    <div className="text-card info">
                        <p className="titulo-prod">{produto.titulo}</p>
                        <p className="valor">{produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        <p className="card-text"><small className="text-muted">Frete Grátis</small></p>
                    </div>
                </div>
                <div className="col-md-1 div-trash mb-3 excluir">
                    <button as={Link} to={"/carrinho"}
                        onClick={() => removerProduto(produto)}
                        className="buttons-icons"
                    >
                        <BsFillTrashFill size="27" className="lixeira" />
                    </button>
                </div>
            </div>
        </div>
    )
}
