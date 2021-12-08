import { createContext, useEffect, useReducer } from 'react';
import { produtoReducer } from '../reducers/produtoReducer'
export const ProdutoContext = createContext();

export const ProdutoContextProvider = ({ children }) => {

    const [produtos, dispatch] = useReducer(produtoReducer, [], () => {
        const localData = localStorage.getItem('produtos');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('produtos', JSON.stringify(produtos))
    }, [produtos])

    const adicionarProduto = (produto) => dispatch({type: 'ADD_PRODUT', payload: produto});
    const decrementar = (produto) => dispatch({type: 'DEC_PRODUT', payload: produto});
    const removerProduto = (produto) => dispatch({type: 'REMOVE_PRODUT', payload: produto});

    return (
        <ProdutoContext.Provider value={{produtos, adicionarProduto, removerProduto, decrementar}}>
            {children}
        </ProdutoContext.Provider>
    )
}
