import { IngredientDetails } from '../../ingredient-details/ingridient-details';
import { OrderDetails } from '../../order-details/order-details';

import type { ModalPayloadMap, TModalType } from '../types/common';

export const modalRegistry: {
  [K in TModalType]: React.ComponentType<{ payload: ModalPayloadMap[K] }>;
} = {
  'ingredient-details': IngredientDetails,
  'order-details': OrderDetails,
};
