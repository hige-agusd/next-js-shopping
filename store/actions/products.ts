import { createAsyncThunk } from '@reduxjs/toolkit';
import { Action, ActionCreator, AnyAction } from 'redux';
import { actionTypes } from './actionsTypes';

export const fetchProducts = createAsyncThunk(
  actionTypes.PRODUCTS_FETCH,
  async () => {
    const response = await fetch( 'https://fakestoreapi.com/products?limit=10' );
    return response.json()
  }
)
