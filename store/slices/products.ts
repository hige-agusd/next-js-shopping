import { createReducer, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../src/utils/types';
import { fetchProducts } from '../actions';

export interface IStateProducts {
  products: Product[] | undefined;
}

const initialState = {
  products: null,
}

const reducer = createReducer(initialState, builder => {
  builder.addCase(fetchProducts.fulfilled, (state, action) => {
    state.products = action.payload;
  })
})

const products = createSlice({
  name: 'products',
  initialState, 
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    })
    .addDefaultCase(() => {}),
})

export default products.reducer;
