import { createSlice } from '@reduxjs/toolkit';
import { convertCurrencies } from '../../src/utils/helper';
import { Exchange } from '../../src/utils/types';
import { fetchRates } from '../actions';

export interface IStateExchange {
  exchange: Exchange | undefined;
}

const initialState = {
  exchange: null,
}

const exchange = createSlice({
  name: 'exchange',
  initialState, 
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchRates.fulfilled, (state, action) => {
      state.exchange = {
        ...action.payload,
        rates: convertCurrencies(action.payload.rates),
      };
    })
    .addDefaultCase(() => {}),
})


export default exchange.reducer;
