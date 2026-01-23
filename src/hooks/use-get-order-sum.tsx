import { useMemo } from 'react';

import type { TIngredient } from '@/types';

export const useGetOrderSum = (ingredients: TIngredient[]): number => {
  return useMemo(
    () => ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0),
    [ingredients]
  );
};
