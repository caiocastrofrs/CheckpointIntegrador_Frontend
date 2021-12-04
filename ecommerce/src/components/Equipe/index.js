import "./style.scss";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Caio from '../../assets/Caio.png';
import Carlindo from '../../assets/Carlindo.png';
import Gaspar from '../../assets/Gaspar.jpeg';
import Jardel from '../../assets/Jardel.jpg';
import Larissa from '../../assets/Larissa.jpeg';

const Equipe = () => {
  return (
    <>
      <section className="section-equipe">
      <h2 className="section-equipe__titulo-section ">Equipe</h2>
        <div className="section-equipe__container">
          <div className="section-equipe__container__integrante">
            <img src={Caio} alt="caio" />
            <div className="section-equipe__container__integrante__titulo">
            <h2 className="section-equipe__container__integrante__titulo__nome ">Caio</h2>
              <p className="text">FullStack</p>
            </div>
            <div className="section-equipe__container__integrante__icon">
            <a href="https://www.linkedin.com/in/caiocastrofrs/">
            <AiFillLinkedin size="36" className="iconLinkedin"/></a>
            <a href="https://github.com/caiocastrofrs">
            <AiFillGithub size="36" className="iconGitHub"/></a>
            </div>
          </div>
          <div className="section-equipe__container__integrante">
          <img src={Carlindo} alt="carlindo" />
          <div className="section-equipe__container__integrante__titulo">
          <h2 className="section-equipe__container__integrante__titulo__nome ">Carlindo</h2>
          <p className="text">FullStack</p>
            </div>
            <div className="section-equipe__container__integrante__icon">
            <a href="https://www.linkedin.com/in/carlindo-junior-556371197/">
            <AiFillLinkedin size="36" className="iconLinkedin"/></a>
            <a href="https://github.com/juniorvilas">
            <AiFillGithub size="36" className="iconGitHub"/></a>
            </div>
          </div>
          <div className="section-equipe__container__integrante">
          <img src={Gaspar} alt="gaspar" />
          <div className="section-equipe__container__integrante__titulo">
          <h2 className="section-equipe__container__integrante__titulo__nome ">Gaspar</h2>
          <p className="text">FullStack</p>
            </div>
            <div className="section-equipe__container__integrante__icon">
            <a href="https://www.linkedin.com/in/gasparpsousa/">
            <AiFillLinkedin size="36" className="iconLinkedin"/></a>
            <a href="https://github.com/GasparPSousa">
            <AiFillGithub size="36" className="iconGitHub"/></a>
            </div>
          </div>
          <div className="section-equipe__container__integrante">
          <img src={Jardel} alt="jardel" />
          <div className="section-equipe__container__integrante__titulo">
          <h2 className="section-equipe__container__integrante__titulo__nome ">Jardel</h2>
          <p className="text">FullStack</p>
            </div>
            <div className="section-equipe__container__integrante__icon">
            <a href="https://www.linkedin.com/in/jardel-silva-oliveira-b9a336213/">
            <AiFillLinkedin size="36" className="iconLinkedin"/></a>
            <a href="https://github.com/jardel978">
            <AiFillGithub size="36" className="iconGitHub"/></a>
            </div>
          </div>
          <div className="section-equipe__container__integrante">
          <img src={Larissa} alt="larissa" />
          <div className="section-equipe__container__integrante__titulo">
          <h2 className="section-equipe__container__integrante__titulo__nome ">Larissa</h2>
          <p className="text">FullStack</p>
            </div>
            <div className="section-equipe__container__integrante__icon">
            <a href="https://www.linkedin.com/in/larissa-nunes-769259147/">
            <AiFillLinkedin size="36" className="iconLinkedin"/></a>
            <a href="https://github.com/Larissa-Nunes">
            <AiFillGithub size="36" className="iconGitHub"/></a>
            </div>
          </div>
          </div> 
      </section>
    </>
  );
};


export default Equipe;