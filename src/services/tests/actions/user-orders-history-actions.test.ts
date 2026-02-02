import { describe, expect, it } from 'vitest';

import {
  userOrdersHistoryWsConnect,
  userOrdersHistoryWsDisconnect,
  userOrdersHistoryWsConnected,
  userOrdersHistoryWsDisconnected,
  userOrdersHistoryWsSend,
  userOrdersHistoryWsMessage,
  userOrdersHistoryWsError,
} from '@services/actions/user-orders-history-actions.tsx';

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

describe('userOrdersHistoryActions', () => {
  describe('userOrdersHistoryWsConnect', () => {
    it('должен создать экшен с правильным типом и payload', () => {
      const payload = { url: 'wss://localhost:3000/orders?token=abc', withAuth: true };
      const expectedAction = { type: 'userOrdersHistory/connect', payload };
      expect(userOrdersHistoryWsConnect(payload)).toEqual(expectedAction);
    });
  });

  describe('userOrdersHistoryWsMessage', () => {
    it('должен создать экшен с правильным типом и payload', () => {
      const response = createMockOrdersResponse();
      const expectedAction = { type: 'userOrdersHistory/message', payload: response };
      expect(userOrdersHistoryWsMessage(response)).toEqual(expectedAction);
    });
  });

  describe('userOrdersHistoryWsDisconnect', () => {
    it('должен создать экшен с правильным типом', () => {
      const expectedAction = {
        type: 'userOrdersHistory/disconnect',
        payload: undefined,
      };
      expect(userOrdersHistoryWsDisconnect()).toEqual(expectedAction);
    });
  });

  describe('userOrdersHistoryWsConnected', () => {
    it('должен создать экшен с правильным типом', () => {
      const expectedAction = { type: 'userOrdersHistory/connected', payload: undefined };
      expect(userOrdersHistoryWsConnected()).toEqual(expectedAction);
    });
  });

  describe('userOrdersHistoryWsDisconnected', () => {
    it('должен создать экшен с правильным типом', () => {
      const expectedAction = {
        type: 'userOrdersHistory/disconnected',
        payload: undefined,
      };
      expect(userOrdersHistoryWsDisconnected()).toEqual(expectedAction);
    });
  });

  describe('userOrdersHistoryWsSend', () => {
    it('должен создать экшен с правильным типом и payload', () => {
      const payload = { message: 'ping' };
      const expectedAction = { type: 'userOrdersHistory/send', payload };
      expect(userOrdersHistoryWsSend(payload)).toEqual(expectedAction);
    });
  });

  describe('userOrdersHistoryWsError', () => {
    it('должен создать экшен с правильным типом и payload', () => {
      const payload = 'Connection failed';
      const expectedAction = { type: 'userOrdersHistory/error', payload };
      expect(userOrdersHistoryWsError(payload)).toEqual(expectedAction);
    });
  });
});
