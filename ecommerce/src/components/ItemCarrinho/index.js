import './style.scss';
import { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ProdutoContext } from '../../context/ProdutoContext';

export const ItemCarrinho = ({ produto }) => {

    const { removerProduto } = useContext(ProdutoContext);

    return (
        <div className="card mb-3" >
            <div className="row g-0 div-item">
                <div className="col-md-4 mb-3 justify-content-center d-flex">
                    <Link  to={`/produtos/${produto.id}`}>
                    <img src={produto.imagem}
                        className="img-card img-fluid rounded-start" alt={produto.titulo}
                        />
                    </Link>
                </div>
                <div className="col-md-2 mb-3 justify-content-center d-flex">
                    <button className="buttons-icons">
                        <AiOutlineMinus size="20" />
                    </button>
                    <input min="1" type="tel" name="LineQuantity" data-cy="line-quantity-input" className="input-quant" value="1" />
                    <button className="buttons-icons">
                        <AiOutlinePlus size="20" />
                    </button>
                </div>
                <div className="col-md-3 texto">
                    <div className="text-card">
                        <p className="titulo-prod">{produto.titulo}</p>
                        <p className="valor">{produto.preco}</p>
                        <p className="card-text"><small className="text-muted">Frete Grátis</small></p>
                    </div>
                </div>
                <div className="col-md-1 div-trash mb-3">
                    <button 
                    onClick={() => removerProduto(produto)}
                    className="buttons-icons" 
                    >
                        <BsFillTrashFill size="20" />
                    </button>
                </div>
            </div>
        </div>
    )
}
