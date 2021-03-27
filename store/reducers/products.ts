import { actionTypes } from '../actions/actionsTypes';

const initialState = {
  products: undefined,
}

const fetchProducts = ( state, action ) => {
  return {
    ...state, 
    rates: action.rates,
  };
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      case actionTypes.PRODUCTS_FETCH: return fetchProducts( state, action );
      default: return state;
  }
};

export default reducer;
