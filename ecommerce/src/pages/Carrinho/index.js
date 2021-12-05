import './style.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from 'react-helmet';
import{ Button } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const Carrinho = () => {





    return(
        <>
        <Helmet>
        <title>Bodega | Carrinho </title>
        </Helmet>
        <Header />        
        <section>
            {/* ITEM 01 */}
            <div className="card mb-3" >
                <div className="row g-0 div-item">
                    <div className="col-md-4 mb-3 justify-content-center d-flex">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_924025-MLB47833480720_102021-O.webp" className="img-card img-fluid rounded-start" alt="img"/>
                    </div> 
                    <div className="col-md-2 mb-3 justify-content-center d-flex">
                        <button className="buttons-icons">
                            <AiOutlineMinus size="20"/>    
                        </button>
                        <input min="1" type="tel" name="LineQuantity" data-cy="line-quantity-input" className="input-quant" value="1"/>
                        <button className="buttons-icons">
                            <AiOutlinePlus size="20"/>        
                        </button>
                    </div>
                    <div className="col-md-3 texto">
                        <div className="text-card">
                            <p className="titulo-prod">Pen Drive</p>
                            <p className="valor">R$ 50,00</p>
                            <p className="card-text"><small className="text-muted">Frete Grátis</small></p>                         
                        </div>                                                                      
                    </div>
                    <div className="col-md-1 div-trash mb-3">
                        <button className="buttons-icons" >
                            <BsFillTrashFill size="20"/>
                        </button>
                    </div>           
                </div>
            </div>
            {/* ITEM 02 */}
            <div className="card mb-3 " >
                <div className="row g-0 div-item">
                    <div className="col-md-4 mb-3 justify-content-center d-flex">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_924025-MLB47833480720_102021-O.webp" className="img-card img-fluid rounded-start" alt="img"/>
                    </div> 
                    <div className="col-md-2 mb-3 justify-content-center d-flex">
                        <button className="buttons-icons">
                            <AiOutlineMinus size="20"/>    
                        </button>
                        <input min="1" type="tel" name="LineQuantity" data-cy="line-quantity-input" className="input-quant" value="1"/>
                        <button className="buttons-icons">
                            <AiOutlinePlus size="20"/>        
                        </button>
                    </div>
                    <div className="col-md-3 texto">
                        <div className="text-card">
                            <p className="titulo-prod">Pen Drive</p>
                            <p className="valor">R$ 50,00</p>
                            <p className="card-text"><small className="text-muted">Frete Grátis</small></p>                         
                        </div>                                                                                     
                    </div>
                    <div className="col-md-1 div-trash mb-3">
                        <button className="buttons-icons" >
                            <BsFillTrashFill size="20"/>
                        </button>
                    </div>           
                </div>
            </div>
            
            
        </section>
        {/* Valor total da  compra */}
        <div className="div-total">
            <div className="div-total-valor">
                <p>Valor total: R$ 100,00</p>
            </div>
            <div  className="div-total-x">
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
        <Footer />
        </>
    );

}

export default Carrinho;

