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

    return (
        <ProdutoContext.Provider value={{produtos, adicionarProduto}}>
            {children}
        </ProdutoContext.Provider>
    )
}
