import './style.scss';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import { ItemCarrinho } from '../../components/ItemCarrinho';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ProdutoContext } from '../../context/ProdutoContext';
import { useContext } from 'react';


const Carrinho = () => {

    const { produtos } = useContext(ProdutoContext);

    console.log(produtos);

    return (
        <>
            <Helmet>
                <title>Bodega | Carrinho </title>
            </Helmet>
            <section>
                {
                    produtos ? produtos.map(item => {
                        return (
                            <ItemCarrinho key={item.id} produto={item} />
                        )
                    }) :
                        <div className="card mb-3">
                            <h2>Você ainda não adicionou nenhum produto!</h2>
                        </div>
                }
            </section>
            {/* Valor total da  compra */}
            <div className="div-total">
                <div className="div-total-valor">
                    <p>Valor total: R$ 100,00</p>
                </div>
                <div className="div-total-x">
                    <p>Até em 10x sem juros</p>
                </div>
            </div>
            {/* Botões de finalizar compra */}
            <div className="buttons-compra">
                <div>
                    <Link to="/produtos">
                        <Button className="position-static btn-car" type="submit" variant="primary">Continuar Comprando</Button>{''}
                    </Link>
                </div>
                <div>
                    <Button className="position-static btn-car" type="submit" variant="secondary">Finalizar Compra</Button>{''}
                </div>
            </div>
        </>
    );

}

export default Carrinho;

