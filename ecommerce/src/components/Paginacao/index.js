import './style.scss';

export const Paginacao = ({ numPaginas, qtdItens, setPaginaAtual, setitensPorPagina }) => {

    let items = [];
    for (let number = 0; number <= numPaginas; number++) {
        if (numPaginas > number) {
            items.push(
                <button
                    key={number}
                    value={number}
                    className="botao-paginacao"
                    onClick={(e) => setPaginaAtual(Number(e.target.value))}
                >
                    {number + 1}
                </button>
            );
        }
    }

    return (
        <div className="menu-paginacao">
            {items}
            <select
                value={qtdItens}
                onChange={(e) => setitensPorPagina(Number(e.target.value))}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
        </div>
    )
}
