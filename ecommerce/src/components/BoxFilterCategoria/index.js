import './style.scss';
import { Formik, Form, Field } from 'formik';
import { Dropdown } from 'react-bootstrap';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const BoxFilterCategoria = () => {


    const categorias = [
        'Bebê',
        'Games',
        'Esporte',
        'Informática',
        'Eletrônicos',
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
                                        categorias && categorias.map(categoria => {
                                            return (
                                                <label>
                                                    <Field style={{marginLeft: '5px'}} type="checkbox" name="checked" value={categoria} />
                                                    <span style={{marginLeft: '5px'}}>{categoria}</span>
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
