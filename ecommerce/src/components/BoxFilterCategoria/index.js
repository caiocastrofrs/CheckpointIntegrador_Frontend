import './style.scss';
import { Form } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

export const BoxFilterCategoria = ({ setCecked }) => {

    const categorias = [
        'Bebê',
        'Games',
        'Esporte',
        'Informática',
        'Eletrônicos',
        'Eletrodomésticos'
    ]

    function capturarCheckds({target}) {
        setCecked(target.value)
    }

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
                    <Form className="fomulario">
                        <div role="group" >
                            {
                                categorias && categorias.map(categoria => {
                                    var tratamento = /[\u0300-\u036f]/g;
                                    const categoriaTratada = (categoria.normalize('NFD').replace(tratamento, "")).toUpperCase();
                                    return (
                                        <label>
                                            <Form.Check 
                                                style={{ marginLeft: '5px' }}
                                                type="radio" name="checked"
                                                value={categoriaTratada}
                                                onClick={(e) => capturarCheckds(e)}
                                            />
                                            <span style={{ marginLeft: '5px' }}>{categoria}</span>
                                        </label>
                                    )
                                })}
                        </div>
                    </Form>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
