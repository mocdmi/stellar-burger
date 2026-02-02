import { describe, expect, it } from 'vitest';

import {
  allOrdersHistoryWsConnect,
  allOrdersHistoryWsDisconnect,
  allOrdersHistoryWsConnected,
  allOrdersHistoryWsDisconnected,
  allOrdersHistoryWsSend,
  allOrdersHistoryWsMessage,
  allOrdersHistoryWsError,
} from '@services/actions/all-orders-history-actions.tsx';

import type { TGetOrdersHistoryWsResponse } from '@services/types.ts';

const createMockOrdersResponse = (
  overrides: Partial<TGetOrdersHistoryWsResponse> = {}
): TGetOrdersHistoryWsResponse => ({
  success: true,
  orders: [],
  total: 0,
  totalToday: 0,
  ...overrides,
});

describe('allOrdersHistoryActions', () => {
  describe('allOrdersHistoryWsConnect', () => {
    it('должен создать экшен с правильным типом и payload', () => {
      const payload = { url: 'wss://localhost:3000/orders/all' };
      const expectedAction = { type: 'allOrdersHistory/connect', payload };
      expect(allOrdersHistoryWsConnect(payload)).toEqual(expectedAction);
    });
  });

  describe('allOrdersHistoryWsMessage', () => {
    it('должен создать экшен с правильным типом и payload', () => {
      const response = createMockOrdersResponse();
      const expectedAction = { type: 'allOrdersHistory/message', payload: response };
      expect(allOrdersHistoryWsMessage(response)).toEqual(expectedAction);
    });
  });

  describe('allOrdersHistoryWsDisconnect', () => {
    it('должен создать экшен с правильным типом', () => {
      const expectedAction = { type: 'allOrdersHistory/disconnect', payload: undefined };
      expect(allOrdersHistoryWsDisconnect()).toEqual(expectedAction);
    });
  });

  describe('allOrdersHistoryWsConnected', () => {
    it('должен создать экшен с правильным типом', () => {
      const expectedAction = { type: 'allOrdersHistory/connected', payload: undefined };
      expect(allOrdersHistoryWsConnected()).toEqual(expectedAction);
    });
  });

  describe('allOrdersHistoryWsDisconnected', () => {
    it('должен создать экшен с правильным типом', () => {
      const expectedAction = {
        type: 'allOrdersHistory/disconnected',
        payload: undefined,
      };
      expect(allOrdersHistoryWsDisconnected()).toEqual(expectedAction);
    });
  });

  describe('allOrdersHistoryWsSend', () => {
    it('должен создать экшен с правильным типом и payload', () => {
      const payload = { message: 'ping' };
      const expectedAction = { type: 'allOrdersHistory/send', payload };
      expect(allOrdersHistoryWsSend(payload)).toEqual(expectedAction);
    });
  });

  describe('allOrdersHistoryWsError', () => {
    it('должен создать экшен с правильным типом и payload', () => {
      const payload = 'Connection failed';
      const expectedAction = { type: 'allOrdersHistory/error', payload };
      expect(allOrdersHistoryWsError(payload)).toEqual(expectedAction);
    });
  });
});
