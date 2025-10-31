import { ConstructorElement } from '@krgaa/react-developer-burger-ui-components';

import type { TConstructorIngredient } from '@/utils/types';

import styles from './constructor-card.module.css';

type ConstructorCardBun = {
  ingredient: TConstructorIngredient;
  position: 'top' | 'bottom';
};

export const ConstructorCardBun = ({
  ingredient,
  position,
}: ConstructorCardBun): React.JSX.Element => {
  return (
    <ConstructorElement
      isLocked
      price={ingredient.price}
      text={ingredient.name}
      thumbnail={ingredient.image}
      type={position}
      extraClass={styles.constructor_card}
    />
  );
};
