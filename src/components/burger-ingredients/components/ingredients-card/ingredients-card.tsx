import { CurrencyIcon } from '@krgaa/react-developer-burger-ui-components';

import type { TIngredient } from '@/utils/types';

import styles from './ingredients-card.module.css';

export const IngredientsCard = ({
  ingredient,
}: {
  ingredient: TIngredient;
}): React.JSX.Element => {
  return (
    <section className={styles.ingredients_card}>
      <img
        className={`${styles.image} ml-4 mr-4`}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <div className={`${styles.price} text text_type_digits-default`}>
        {ingredient.price}
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default">{ingredient.name}</h3>
    </section>
  );
};
