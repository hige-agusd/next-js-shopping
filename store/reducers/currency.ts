import { actionTypes } from '../actions/actionsTypes';

const initialState = {
  current: 'JPY',
  rates: undefined,
}

const fetchRates = ( state, action ) => {
  return {
    ...state, 
    rates: action.rates,
  };
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      case actionTypes.CURRENCY_RATES_FETCH: return fetchRates( state, action );
      default: return state;
  }
};

export default reducer;
