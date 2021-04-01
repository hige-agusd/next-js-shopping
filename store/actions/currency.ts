import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './actionsTypes';

export const setCurrency = createAction<string | undefined>(actionTypes.CURRENCY_SELECTOR_UPDATE)
