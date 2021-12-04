/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Produto = () => {

    return(
        <>
           <Header />
           <div className="container_produto">
               <div className="container_imagem">
                    <img src="https://pullbr-4c63.kxcdn.com/pen-drive-gb-com-memoria-cob-usb-superior-kjmj-b.png?cultureCode=pt-BR&version=2d62f59d042abd88b7065268d81d8226" alt="" />
               </div>
               <div className="container_descricao">
                   <div className="container_precoDesconto">
                    <p>R$ 1499</p>
                    <p>20% off</p> 
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
           <Footer />
        </>
    );

}

export default Produto;