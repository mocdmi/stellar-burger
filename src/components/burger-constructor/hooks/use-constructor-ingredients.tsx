import { useMemo } from 'react';

import type { TConstructorIngredient } from '@/utils/types';

type TConstructor = {
  bun: TConstructorIngredient | null;
  filling: TConstructorIngredient[];
};

export const useConstructorIngredients = (
  ingredients: TConstructorIngredient[]
): TConstructor => {
  return useMemo(() => {
    const filling: TConstructorIngredient[] = [];
    let bun: TConstructorIngredient | null = null;

    ingredients.forEach((ingredient) => {
      if (ingredient.type === 'bun') {
        bun = ingredient;
      } else {
        filling.push(ingredient);
      }
    });

    return {
      bun,
      filling,
    };
  }, [ingredients]);
};
