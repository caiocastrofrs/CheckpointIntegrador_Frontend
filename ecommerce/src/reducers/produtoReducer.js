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
      case 'DEC_PRODUT':
         const checkIfProdutAlreadyExists = state.filter(produto => (
          produto.id === action.payload.id
        ));
        if (checkIfProdutAlreadyExists.length > 1) {
          console.log(state);
          let index = state.indexOf(action.payload);
          console.log(index);
          state.splice(index, 1);
          console.log(state);
        }
        return [...state];
      default:
        return state;
    }
  }