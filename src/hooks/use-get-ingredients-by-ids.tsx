import { useGetAllIngredientsQuery } from '@/services/api/endpoints/ingredients-endpoints';
import { useMemo } from 'react';

import type { TIngredient } from '@/types';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

type TUseGetIngredientsByIdsResult = {
  ingredients: TIngredient[];
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  isError: boolean;
};

export const useGetIngredientsByIds = (ids: string[]): TUseGetIngredientsByIdsResult => {
  const { data, isLoading, error, isError } = useGetAllIngredientsQuery();

  const ingredients = useMemo(() => {
    if (!data?.data?.length || !ids.length) {
      return [];
    }

    const idsSet = new Set(ids);

    return data.data.filter((item) => idsSet.has(item._id));
  }, [data, ids]);

  return { ingredients, isLoading, error, isError };
};
