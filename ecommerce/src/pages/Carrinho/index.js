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

    function calcTotalCarrinho(p, formatado = false) {
        let total = 0;
        if (p.length > 0) {
            let precos = produtos.map((produto) => produto.preco);
            total = precos.reduce((soma, preco) => soma + preco);
        }
        if (formatado)
            return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        else
            return total
    }

    const parcela = 10;
    function calcParcela() {
        let total = calcTotalCarrinho(produtos);
        return (total / parcela).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <>
            <Helmet>
                <title>Bodega | Carrinho </title>
            </Helmet>
            <section>
                {
                    produtos.length > 0 ? produtos.map(item => {
                        return (
                            <ItemCarrinho key={item.id} produto={item} />
                        )
                    }) :
                        <div className="card mb-3"
                            style={{
                                textAlign: 'center',
                                fontSize: 25
                            }}
                        >
                            <p>Você ainda não adicionou nenhum produto!</p>
                            <Link to={"/"}>Voltar para Home</Link>
                        </div>
                }
            </section>
            {/* Valor total da  compra */}
            <div className="div-total">
                <div className="div-total-valor">
                    <p>Valor total: {calcTotalCarrinho(produtos, true)}</p>
                </div>
                <div className="div-total-x">
                    <p>Até em {parcela}x de {calcParcela()} sem juros</p>
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

