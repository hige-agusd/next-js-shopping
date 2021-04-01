import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionsTypes';

export const fetchRates = createAsyncThunk(
  actionTypes.CURRENCY_RATES_FETCH,
  async () => {
    // const response = await fetch( 'https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,GBP,JPY&access_key=ad6152c4a7bcd0a119bc42fcb460b5a2' );
    const response = await fetch( 'http://api.exchangeratesapi.io/latest?symbols=USD,GBP,JPY&access_key=ad6152c4a7bcd0a119bc42fcb460b5a2' );
    return response.json()
  }
)
