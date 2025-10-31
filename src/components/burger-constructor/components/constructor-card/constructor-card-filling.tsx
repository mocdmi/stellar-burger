import { ConstructorElement } from '@krgaa/react-developer-burger-ui-components';

import type { TConstructorIngredient } from '@/utils/types';

import styles from './constructor-card.module.css';

type ConstructorCardFilling = {
  ingredient: TConstructorIngredient;
};

export const ConstructorCardFilling = ({
  ingredient,
}: ConstructorCardFilling): React.JSX.Element => {
  return (
    <ConstructorElement
      price={ingredient.price}
      text={ingredient.name}
      thumbnail={ingredient.image}
      extraClass={styles.constructor_card}
    />
  );
};
