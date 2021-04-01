import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './actionsTypes';

export const addItem = createAction<string | undefined>(actionTypes.CART_ADD_ITEM);
export const removeItem = createAction<string | undefined>(actionTypes.CART_REMOVE_ITEM);
export const deleteItem = createAction<string | undefined>(actionTypes.CART_DELETE_ITEM);
export const clearCart = createAction<string | undefined>(actionTypes.CART_CLEAR);
