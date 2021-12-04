import "./style.scss";
import { AiFillCamera } from "react-icons/ai";
const Categorias = () => {
  const categorias = [
    "ELETRODOMESTICOS",
    "ELETRONICOS",
    "BEBE",
    "ESPORTE",
    "GAMES",
    "INFORMATICA",
  ];

  return (
    <>
      <section className="section-categorias">
        <h2 className="section-categorias__titulo-section ">Categorias</h2>
        <div className="section-categorias__container w-100">
          {categorias.map((categoria) => {
            return (
              <div className="section-categorias__container__categoria col-5 col-sm-3 col-md-5 col-lg-4 col-xl-4">
                <AiFillCamera className="section-categorias__container__categoria__icon" />
                <span className="section-categorias__container__categoria__titulo">
                  {categoria}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Categorias;
