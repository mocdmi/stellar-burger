import {
  allOrdersHistoryWsConnect,
  allOrdersHistoryWsConnected,
  allOrdersHistoryWsDisconnect,
  allOrdersHistoryWsDisconnected,
  allOrdersHistoryWsError,
  allOrdersHistoryWsMessage,
  allOrdersHistoryWsSend,
} from '../actions/all-orders-history-actions';
import {
  isOrdersHistoryResponse,
  type TGetOrdersHistoryWsRequest,
  type TGetOrdersHistoryWsResponse,
} from '../types';
import { createWebsocketMiddleware } from './create-websocket-middleware';

import type { TWsActions } from './create-websocket-middleware';

const actions: TWsActions<TGetOrdersHistoryWsRequest, TGetOrdersHistoryWsResponse> = {
  connect: allOrdersHistoryWsConnect,
  disconnect: allOrdersHistoryWsDisconnect,
  connected: allOrdersHistoryWsConnected,
  disconnected: allOrdersHistoryWsDisconnected,
  error: allOrdersHistoryWsError,
  send: allOrdersHistoryWsSend,
  message: allOrdersHistoryWsMessage,
};

export const allOrdersHistoryMiddleware = createWebsocketMiddleware<
  TGetOrdersHistoryWsRequest,
  TGetOrdersHistoryWsResponse
>(actions, isOrdersHistoryResponse);
