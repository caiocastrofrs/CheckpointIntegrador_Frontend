import './style.scss';
import { Formik, Form, Field } from 'formik';
import { Dropdown } from 'react-bootstrap';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const BoxFilterCategoria = () => {


    const categorias = [
        'Bebê',
        'Games',
        'Esporte',
        'Informárica',
        'Eletronicos',
        'Eletrodomésticos'
    ]

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle style={{
                    fontSize: '20px'
                }} className="filtro-categorias" id="dropdown-basic">
                    Categorias
                </Dropdown.Toggle>

                <Dropdown.Menu style={{
                    borderRadius: '5px'
                }}>
                    <Formik
                        initialValues={{
                            checked: []
                        }}
                        onSubmit={async (values) => {
                            await sleep(500);
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        {({ values }) => (
                            <Form className="fomulario">
                                <div role="group" >
                                    {
                                        categorias.map(categoria => {
                                            return (
                                                <label>
                                                    <Field type="checkbox" name="checked" value={categoria} className="imput-categoria" />
                                                    {categoria}
                                                </label>
                                            )
                                        })}
                                </div>
                                <button type="submit">Filtrar</button>
                            </Form>
                        )}
                    </Formik>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
