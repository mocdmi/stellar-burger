import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import type { TOrdersHistory } from '@/types';

export const allOrdersHistory = createSelector(
  (state: RootState) => state.allOrdersHistory.messages?.orders,
  (orders): TOrdersHistory[] => orders ?? []
);

export const isOrdersHistoryWsConnected = (state: RootState): boolean =>
  state.allOrdersHistory.connected;

export const isOrdersHistoryWsMessageLoading = (state: RootState): boolean =>
  state.allOrdersHistory.isLoading;

export const totalOrdersHistory = (state: RootState): number =>
  state.allOrdersHistory.messages?.total ?? 0;

export const totalTodayOrdersHistory = (state: RootState): number =>
  state.allOrdersHistory.messages?.totalToday ?? 0;
