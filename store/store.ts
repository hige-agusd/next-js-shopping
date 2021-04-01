import { configureStore, getDefaultMiddleware, EnhancedStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import slice from './slices';

const devMode = process.env.NODE_ENV === 'development';

let store;
let persistor;
const isClient = typeof window !== 'undefined';

if (isClient) {
  // const { persistReducer } = require('redux-persist');
  // const storage = require('redux-persist/lib/storage').default;

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['cart', 'currency'],
  };
  
  const persistedReducer = persistReducer(persistConfig, slice);

  store = configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })],
    devTools: devMode,
  });

  persistor = persistStore(store)
  store.__PERSISTOR = persistor;

} else {
  store = configureStore({
    reducer: slice,
    middleware: [...getDefaultMiddleware()],
    devTools: devMode,
  });
}

const setupStore = (context: any): EnhancedStore => store;

const makeStore: MakeStore = (context) => setupStore(context);

export const wrapper = createWrapper(makeStore, {
  debug: devMode,
});

export type AppDispatch = typeof store.dispatch;
export default wrapper;
export {persistor};