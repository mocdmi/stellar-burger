import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apiMiddleware, apiReducer, apiReducerPath } from './api/api';
import { allOrdersHistoryMiddleware } from './middlewares/all-orders-history-middleware';
import { userOrdersHistoryMiddleware } from './middlewares/user-orders-history-middleware';
import {
  ordersHistoryAllReducer,
  ordersHistoryAllReducerPath,
} from './slices/all-orders-history-slice';
import { authReducer, authReducerPath } from './slices/auth-slice';
import {
  ingredientsConstructorReducer,
  ingredientsConstructorReducerPath,
} from './slices/ingredients-constructor-slice';
import {
  ordersHistoryUserReducer,
  ordersHistoryUserReducerPath,
} from './slices/user-orders-history-slice';

export const store = configureStore({
  reducer: {
    [ingredientsConstructorReducerPath]: ingredientsConstructorReducer,
    [authReducerPath]: authReducer,
    [apiReducerPath]: apiReducer,
    [ordersHistoryAllReducerPath]: ordersHistoryAllReducer,
    [ordersHistoryUserReducerPath]: ordersHistoryUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiMiddleware,
      userOrdersHistoryMiddleware,
      allOrdersHistoryMiddleware
    ),
  devTools: true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
