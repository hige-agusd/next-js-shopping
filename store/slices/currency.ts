import { createSlice } from '@reduxjs/toolkit';
import { setCurrency } from '../actions';

export interface IStateCurrency {
  current: string;
}

const initialState = {
  current: 'JPY',
}

const currency = createSlice({
  name: 'currency',
  initialState, 
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(setCurrency, (state, action) => {
      state.current = action.payload;
    })
    .addDefaultCase(() => {}),
})


export default currency.reducer;
