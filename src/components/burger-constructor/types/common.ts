import type { TConstructorIngredient } from '@/utils/types';

export type TConstructorCardProps =
  | { ingredient: TConstructorIngredient; position: 'top' | 'bottom' }
  | { ingredient: TConstructorIngredient; position?: never };
