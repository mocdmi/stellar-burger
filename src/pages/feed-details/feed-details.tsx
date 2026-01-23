import { OrdersHistoryDetails } from '@/components/orders-history-details/orders-history-details';
import { OrdersHistoryIngredientsCard } from '@/components/orders-history-ingredients-card/orders-history-ingredients-card';
import { ordersHistory } from '@/orders-history.mock';

import styles from './feed-details.module.css';

export const FeedDetailsPage = (): React.JSX.Element => {
  return (
    <section className={styles.feed_details}>
      <div className={styles.content}>
        <OrdersHistoryDetails
          order={ordersHistory[0]}
          renderOrderCard={(ingredient) => (
            <OrdersHistoryIngredientsCard key={ingredient._id} ingredient={ingredient} />
          )}
        />
      </div>
    </section>
  );
};
