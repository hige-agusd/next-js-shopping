import { actionTypes } from './actionsTypes';

export const fetchRatesSuccess = (rates) => {
  return {
    type: actionTypes.CURRENCY_RATES_FETCH,
    rates
  };
}

export const fetchRates = async () => {
  return async dispatch => {
      const response = await fetch( 'https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,GBP,JPY' );
      const rates = await response.json();
      dispatch(fetchRatesSuccess(rates.rates));
  };
};
