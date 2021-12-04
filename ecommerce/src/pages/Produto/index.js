/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';
import { Helmet } from 'react-helmet'
import Header from "../../components/Header";
import Footer from "../../components/Footer";




const Produto = () => {


    return(
        <>
            <Helmet>
                <title>Bodega | Produto</title>
            </Helmet>
           <Header />
           <h2 className="title"> Console Xbox Series S 512gb </h2>
           <div className="container_produto">
               <div className="container_imagem">
                    <img className="imagem" src="https://http2.mlstatic.com/D_NQ_NP_939935-MLB48431344222_122021-O.webp" alt="" />
               </div>
               <div className="container_descricao">
                   <div className="container_precoDesconto">
                    <p className="preco">R$ 2.499</p>
                    <p className="desconto">20% off</p> 
                   </div>
                   <p className="dozeVezes">12xR$124,92 sem juros</p>
                   <p className="freteGratis">Frete Grátis</p>
                   <p className="descricao">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas aspernatur cum tempore nihil necessitatibus explicabo, unde animi, quaerat aliquam voluptatum consectetur voluptate eaque corrupti iusto possimus eius ratione blanditiis. Mollitia?</p>
                   {/* <div className="container_botao">
                        <a className="buttonComprar" href="#">Comprar agora</a>
                   </div> */}

                   <div className="container_botao">
                        <a className="buttonAdicionar" href="#">Adicionar ao carrinho</a>
                   </div>
                   
               </div>
           </div>

           <p>Quem viu esse produto também comprou</p>


           <Footer />
        </>
    );

}

export default Produto;