import { Link } from 'react-router-dom';

import type { TOrdersHistory } from '@/types';
import type { ReactNode } from 'react';

import styles from './feed-orders-history.module.css';

type TFeedOrdersHistoryProps = {
  orders: TOrdersHistory[];
  renderOrdersHistoryCard: (order: TOrdersHistory) => ReactNode;
};

export const FeedOrdersHistory = ({
  orders,
  renderOrdersHistoryCard: renderOrderCard,
}: TFeedOrdersHistoryProps): React.JSX.Element => {
  return (
    <div className={`${styles.feed_orders_history} mb-10`}>
      <div className={`${styles.scrolled} custom-scroll`}>
        {orders.map((order) => (
          <Link
            key={order._id}
            to={`/feed/${order._id}`}
            className={styles.details_link}
          >
            {renderOrderCard(order)}
          </Link>
        ))}
      </div>
    </div>
  );
};
