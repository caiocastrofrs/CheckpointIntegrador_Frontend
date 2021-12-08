import { Animacao404 } from '../../components/Animacao404';
import './style.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <>
            <div className="animacao-not-found">
                <Link to="/"><Animacao404 /></Link>
                <div className="div-notfound">
                    <h1 className="h1-notfound">Ops!</h1>
                    <h2 className="h2-notfound">Não conseguimos encontrar a página que você está procurando.</h2>
                    <Link className="link" to="/">Voltar para página princinal</Link>
                </div>
            </div>
        </>
    );

}

export default NotFound;