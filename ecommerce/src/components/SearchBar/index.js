import './style.scss';
import { Formik, Form, Field } from 'formik';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    const handleSubmit = ({nomeUsuario}) => {
        console.log(nomeUsuario);
    }
    return(
    <>
    <Formik initialValues={{ nomeUsuario: "" }} onSubmit={handleSubmit}>
        <Form className="form mx-2 my-5">
          <Field
            placeholder="Busque um produto"
            required
            type="text"
            name="nomeUsuario"
            id="nomeUsuario"
            className="form-control my-3"
          />
          <button type="submit" className="btn"><FaSearch size="24" className="lupa" type="submit"/></button>
        </Form>
      </Formik>
    </>
    );
}

export default SearchBar;