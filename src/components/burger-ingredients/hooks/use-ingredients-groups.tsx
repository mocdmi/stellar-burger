import { useMemo } from 'react';

import { INGREDIENTS_GROUP_TYPE } from '../const/ingredients-group-types';

import type { TIngredient, TIngredientsGroupType } from '@/utils/types';

export const useIngredientsGroups = (
  ingredients: TIngredient[]
): { groupedIngredients: Record<TIngredientsGroupType, TIngredient[]> } => {
  return useMemo(() => {
    const groupedIngredients: Record<TIngredientsGroupType, TIngredient[]> =
      Object.fromEntries(
        Object.entries(INGREDIENTS_GROUP_TYPE).map(([key, _]) => [key, []])
      ) as Record<string, TIngredient[]>;

    ingredients.forEach((item) => {
      groupedIngredients[item.type].push(item);
    });

    return {
      groupedIngredients,
    };
  }, [ingredients]);
};
