import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
import exchange, { IStateExchange } from './exchange';
import currency, { IStateCurrency } from './currency';
import products, { IStateProducts } from './products';
import cart, { IStateCart  } from './cart';

export interface State {
    currency: IStateCurrency;
    exchange: IStateExchange;
    products: IStateProducts;
    cart: IStateCart;
}

const rootReducer = (state: State | undefined, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            let nextState = {
                ...state, // use previous state
                ...action.payload, // apply delta from hydration
              }
            if (state.cart?.cart?.length) nextState.cart.cart = state.cart?.cart // preserve cart on client side navigation
            if (state.currency?.current) nextState.currency = {...state.currency } // preserve current currency value on client side navigation
            return nextState;

        default: {
            const combineReducer = combineReducers({
                products,
                currency,
                exchange,
                cart,
            });
            return combineReducer(state, action);
        }
    }
};
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
