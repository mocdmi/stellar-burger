import { describe, expect, it } from 'vitest';

import { authSliceActions } from '@services/slices/auth-slice.ts';

import type { TUser } from '@services/types.ts';

describe('authActions', () => {
  describe('setUser', () => {
    it('должен создать экшен с правильным типом и payload', () => {
      const userData: TUser = {
        user: {
          email: 'test@example.com',
          name: 'Test User',
        },
      };

      const expectedAction = {
        type: 'auth/setUser',
        payload: userData,
      };

      expect(authSliceActions.setUser(userData)).toEqual(expectedAction);
    });
  });

  describe('logout', () => {
    it('должен создать экшен с правильным типом', () => {
      const expectedAction = {
        type: 'auth/logout',
        payload: undefined,
      };

      expect(authSliceActions.logout()).toEqual(expectedAction);
    });
  });
});
