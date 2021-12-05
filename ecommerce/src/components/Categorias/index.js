import "./style.scss";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { BsSmartwatch } from "react-icons/bs";
import { FaBabyCarriage } from "react-icons/fa";
import { MdSportsSoccer } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { HiOutlineDesktopComputer } from "react-icons/hi";
const Categorias = () => {
  
  
  const categorias = [
    "ELETRODOMESTICOS",
    "ELETRONICOS",
    "BEBE",
    "ESPORTE",
    "GAMES",
    "INFORMATICA",
  ];

  const icons = [
    CgSmartHomeRefrigerator,
    BsSmartwatch,
    FaBabyCarriage,
    MdSportsSoccer,
    CgGames,
    HiOutlineDesktopComputer,
  ]
  
  return (
    <>
      <section className="section-categorias">
        <h2 className="section-categorias__titulo-section ">Categorias</h2>
        <div className="section-categorias__container w-100">
          {categorias.map((categoria, index) => {
            let Icon = icons[index];
            return (
              <div className="section-categorias__container__categoria col-5 col-sm-3 col-md-5 col-lg-4 col-xl-4">
                <Icon className="section-categorias__container__categoria__icon" />
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
