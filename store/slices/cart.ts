import { createSlice } from '@reduxjs/toolkit';
import { addItemUtil, decreaseItemUtil, deleteItemUtil } from '../../src/utils/helper';
import { ItemInCart } from '../../src/utils/types';
import { addItem, clearCart, deleteItem, removeItem } from '../actions';

export interface IStateCart {
  cart: ItemInCart[];
}

const initialState = {
  cart: [],
}

const currency = createSlice({
  name: 'cart',
  initialState, 
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(addItem, (state, action) => {
      state.cart = addItemUtil(state.cart, action.payload);
    })
    .addCase(removeItem, (state, action) => {
      state.cart = decreaseItemUtil(state.cart, action.payload);
    })
    .addCase(deleteItem, (state, action) => {
      state.cart = deleteItemUtil(state.cart, action.payload);
    })
    .addCase(clearCart, (state, action) => {
      state.cart = [];
    })
    .addDefaultCase(() => {}),
})


export default currency.reducer;
