import { createSlice } from '@reduxjs/toolkit';

import {
  userOrdersHistoryWsConnected,
  userOrdersHistoryWsDisconnected,
  userOrdersHistoryWsError,
  userOrdersHistoryWsMessage,
} from '../actions/user-orders-history-actions';

import type { TGetOrdersHistoryWsResponse } from '../types';

type TUserOrderHistorySliceState = {
  connected: boolean;
  error: string | null;
  messages: TGetOrdersHistoryWsResponse | null;
};

const initialState: TUserOrderHistorySliceState = {
  connected: false,
  error: null,
  messages: null,
};

const userOrdersHistorySlice = createSlice({
  name: 'userOrdersHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userOrdersHistoryWsConnected, (state) => {
        state.connected = true;
        state.error = null;
      })
      .addCase(userOrdersHistoryWsDisconnected, (state) => {
        state.connected = false;
      })
      .addCase(userOrdersHistoryWsError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(userOrdersHistoryWsMessage, (state, action) => {
        state.messages = action.payload;
      });
  },
});

export const {
  reducer: ordersHistoryUserReducer,
  reducerPath: ordersHistoryUserReducerPath,
} = userOrdersHistorySlice;
