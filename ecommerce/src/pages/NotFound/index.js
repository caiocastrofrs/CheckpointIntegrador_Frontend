import { Animacao404 } from '../../components/Animacao404';
import './style.scss';

const NotFound = () => {

    return(
        <div className="anomacao-not-found">
            <Animacao404 />
            <h2 className="titulo-not-found">Not found</h2>
        {/* <img src="https://picsum.photos/200" alt="kdsoadkaoaskdad"/> */}
        </div>
    );

}

export default NotFound;