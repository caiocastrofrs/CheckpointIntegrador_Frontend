import './style.scss';
// import { Formik, Form, Field } from 'formik';
import { FaSearch } from 'react-icons/fa';

const Pesquisa = ({value, onChange}) => {

    function handleChange({target}) {
      onChange(target.value)
    }

    return(
    <>
        <form className="form m-auto">
          <input
            placeholder="Busque um produto"
            required
            type="search"
            name="nomeUsuario"
            id="nomeUsuario"
            value={value}
            onChange={handleChange}
            className="form-control my-3"
          />
          <button type="submit" className="btn"><FaSearch size="24" className="lupa" type="submit"/></button>
        </form>
    </>
    );
}

export default Pesquisa;