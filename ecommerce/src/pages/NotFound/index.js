import './style.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return(
        <>
        <div>
            <h1>Ops!</h1>
            <h2>Não conseguimos encontrar a página que você está procurando</h2>
            <Link className="link" to="/">Voltar para página princinal -></Link>
        </div>
        
        </>
    );

}

export default NotFound;