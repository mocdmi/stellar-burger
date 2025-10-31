import { ConstructorCardBun } from './constructor-card-bun';
import { ConstructorCardFilling } from './constructor-card-filling';

import type { TConstructorCardProps } from '../../types/common';

export const ConstructorCard = ({
  ingredient,
  position,
}: TConstructorCardProps): React.JSX.Element => {
  if (ingredient.type === 'bun') {
    return <ConstructorCardBun ingredient={ingredient} position={position!} />;
  }

  return <ConstructorCardFilling ingredient={ingredient} />;
};
