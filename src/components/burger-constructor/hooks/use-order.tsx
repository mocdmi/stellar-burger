import { useMemo } from 'react';

import type { TConstructorIngredient } from '@/utils/types';

export const useOrder = (ingredients: TConstructorIngredient[]): { total: number } => {
  const total = useMemo(
    () =>
      ingredients.reduce((acc, ingredient) => {
        if (ingredient.type === 'bun') {
          return acc + ingredient.price * 2;
        }
        return acc + ingredient.price;
      }, 0),
    [ingredients]
  );

  return {
    total,
  };
};
