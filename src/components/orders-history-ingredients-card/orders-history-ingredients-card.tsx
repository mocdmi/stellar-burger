import { CurrencyIcon } from '@krgaa/react-developer-burger-ui-components';

import type { TOrderIngredient } from '@/orders-history.mock';

import styles from './orders-history-ingredients-card.module.css';

type TOrdersIngredientsCardProps = {
  ingredient: TOrderIngredient;
};

export const OrdersHistoryIngredientsCard = ({
  ingredient,
}: TOrdersIngredientsCardProps): React.JSX.Element => {
  return (
    <section className={styles.orders_ingredients_card}>
      <div className={styles.ingredient_image}>
        <img src={ingredient.image} alt="" />
      </div>
      <h3 className={`${styles.name} text text_type_main-default`}>{ingredient.name}</h3>
      <div className={styles.sum}>
        <span className="text text_type_digits-default">
          {ingredient.total} x {ingredient.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
    </section>
  );
};
