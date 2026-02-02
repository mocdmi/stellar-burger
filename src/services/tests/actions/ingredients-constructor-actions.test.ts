import { describe, expect, it } from 'vitest';

import { ingredientsConstructorActions } from '@services/slices/ingredients-constructor-slice.ts';

import type { TConstructorIngredient } from '@/types.ts';

const createMockIngredient = (
  overrides: Partial<TConstructorIngredient> = {}
): TConstructorIngredient => {
  return {
    _id: 'ingredient-1',
    name: 'Test Ingredient',
    type: 'main',
    proteins: 10,
    fat: 5,
    carbohydrates: 20,
    calories: 100,
    price: 50,
    image: 'image-url',
    image_large: 'image-large-url',
    image_mobile: 'image-mobile-url',
    __v: 0,
    uuid: 'uuid-1',
    ...overrides,
  };
};

describe('ingredientsConstructorActions', () => {
  describe('addIngredient', () => {
    it('должен создать экшен с правильным типом и payload', () => {
      const ingredient = createMockIngredient({ uuid: 'uuid-1' });
      const expectedAction = {
        type: 'ingredientsConstructor/addIngredient',
        payload: ingredient,
      };
      expect(ingredientsConstructorActions.addIngredient(ingredient)).toEqual(
        expectedAction
      );
    });
  });

  describe('reset', () => {
    it('должен создать экшен с правильным типом', () => {
      const expectedAction = {
        type: 'ingredientsConstructor/reset',
        payload: undefined,
      };
      expect(ingredientsConstructorActions.reset()).toEqual(expectedAction);
    });
  });

  describe('replaceIngredient', () => {
    it('должен создать экшен с правильным типом и payload', () => {
      const ingredient = createMockIngredient({ uuid: 'uuid-1' });
      const payload = { index: 0, ingredient };
      const expectedAction = {
        type: 'ingredientsConstructor/replaceIngredient',
        payload,
      };
      expect(ingredientsConstructorActions.replaceIngredient(payload)).toEqual(
        expectedAction
      );
    });
  });

  describe('moveIngredient', () => {
    it('должен создать экшен с правильным типом и payload', () => {
      const payload = { draggedIndex: 0, hoveredIndex: 1 };
      const expectedAction = {
        type: 'ingredientsConstructor/moveIngredient',
        payload,
      };
      expect(ingredientsConstructorActions.moveIngredient(payload)).toEqual(
        expectedAction
      );
    });
  });

  describe('deleteIngredient', () => {
    it('должен создать экшен с правильным типом и payload', () => {
      const payload = { index: 0 };
      const expectedAction = {
        type: 'ingredientsConstructor/deleteIngredient',
        payload,
      };
      expect(ingredientsConstructorActions.deleteIngredient(payload)).toEqual(
        expectedAction
      );
    });
  });
});
