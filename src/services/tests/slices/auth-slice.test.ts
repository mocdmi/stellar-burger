import { describe, expect, it } from 'vitest';

import { authSliceActions, authReducer } from '@services/slices/auth-slice.ts';

import type { TUser } from '@services/types.ts';

describe('authReducer', () => {
  const initialState: TUser = {
    user: null,
  };

  it('должен вернуть начальное состояние', () => {
    expect(authReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  describe('setUser', () => {
    it('должен установить пользователя', () => {
      const userData: TUser = {
        user: {
          email: 'test@example.com',
          name: 'Test User',
        },
      };

      const nextState = authReducer(initialState, authSliceActions.setUser(userData));

      expect(nextState.user).toEqual({
        email: 'test@example.com',
        name: 'Test User',
      });
    });
  });

  describe('logout', () => {
    it('должен очистить пользователя при logout', () => {
      const loggedInState: TUser = {
        user: {
          email: 'test@example.com',
          name: 'Test User',
        },
      };

      const nextState = authReducer(loggedInState, authSliceActions.logout());

      expect(nextState.user).toBeNull();
    });
  });
});
