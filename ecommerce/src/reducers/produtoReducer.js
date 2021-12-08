export const produtoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_PRODUT':
        // const checkIfProdutAlreadyExists = state.filter(produto => (
        //   produto.id === action.payload.id
        // ));
        // if (!checkIfProdutAlreadyExists.length) {
          return [...state, action.payload];
        // }
        // return state;
      case 'REMOVE_PRODUT':
        return state.filter(produto => (
            produto.id !== action.payload.id));
      default:
        return state;
    }
  }