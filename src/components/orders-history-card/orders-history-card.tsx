import { useGetIngredientsByIds } from '@/hooks/use-get-ingredients-by-ids';
import { useGetOrderSum } from '@/hooks/use-get-order-sum';
import {
  CurrencyIcon,
  FormattedDate,
} from '@krgaa/react-developer-burger-ui-components';

import styles from './orders-history-card.module.css';

type TOrdersHistoryCard = {
  name: string;
  number: string;
  createdAt: string;
  ingredientsIds: string[];
};

export const OrdersHistoryCard = ({
  name,
  number,
  createdAt,
  ingredientsIds,
}: TOrdersHistoryCard): React.JSX.Element => {
  const { ingredients, isLoading } = useGetIngredientsByIds(ingredientsIds);
  const sum = useGetOrderSum(ingredients);

  return (
    <section className={`${styles.orders_history_card} p-6`}>
      <div className={`${styles.number} text text_type_digits-default`}>#{number}</div>
      <FormattedDate
        date={new Date(createdAt)}
        className={`${styles.date} text text_type_main-small text_color_inactive`}
      />
      <h3 className={`${styles.name} text text_type_main-medium`}>{name}</h3>
      <div className={styles.ingredients_images}>
        {isLoading ? (
          <span className="text text_type_main-small">Загрузка...</span>
        ) : (
          ingredients.map((ingredient) => (
            <div key={ingredient._id} className={styles.ingredient_image}>
              <img src={ingredient.image} alt="" />
            </div>
          ))
        )}
      </div>
      <div className={styles.sum}>
        <span className="text text_type_digits-default">{sum}</span>
        <CurrencyIcon type="primary" />
      </div>
    </section>
  );
};
