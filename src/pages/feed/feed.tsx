import { FeedOrdersHistory } from '@/components/feed-orders-history/feed-orders-history';
import { FeedSummary } from '@/components/feed-summary/feed-summary';
import { OrdersHistoryCard } from '@/components/orders-history-card/orders-history-card';
import { API_WS_ORDER_HISTORY_ALL } from '@/const';
// import { finishedNumbers, inProgressNumbers } from '@/orders-history.mock';
import {
  allOrdersHistoryWsConnect,
  allOrdersHistoryWsDisconnect,
} from '@/services/actions/all-orders-history-actions';
import { useAppDispatch } from '@/services/hooks/use-app-dispatch';
import { useAppSelector } from '@/services/hooks/use-app-selector';
import {
  allOrdersHistory,
  isOrdersHistoryWsConnected,
  isOrdersHistoryWsMessageLoading,
  totalOrdersHistory,
  totalTodayOrdersHistory,
} from '@/services/selectors/all-orders-history-selectors';
import { Preloader } from '@krgaa/react-developer-burger-ui-components';
import { useEffect } from 'react';

import styles from './feed.module.css';

export const FeedPage = (): React.JSX.Element => {
  const orders = useAppSelector(allOrdersHistory);
  const totalTodayOrders = useAppSelector(totalTodayOrdersHistory);
  const totalOrders = useAppSelector(totalOrdersHistory);
  const isConnected = useAppSelector(isOrdersHistoryWsConnected);
  const isMessageLoading = useAppSelector(isOrdersHistoryWsMessageLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(allOrdersHistoryWsConnect(API_WS_ORDER_HISTORY_ALL));
    return (): void => {
      dispatch(allOrdersHistoryWsDisconnect());
    };
  }, []);

  return (
    <section className={styles.feed}>
      <h1 className="text text_type_main-large mt-10 mb-5 pl-5">Лента заказов</h1>
      <div className={`${styles.content} pl-5 pr-5`}>
        {!isConnected || isMessageLoading ? (
          <div className={styles.preloader}>
            <Preloader />
          </div>
        ) : orders.length === 0 ? (
          <span className="text text_type_main-small">Заказов нет</span>
        ) : (
          <>
            <FeedOrdersHistory
              orders={orders}
              renderOrdersHistoryCard={({ number, createdAt, ingredients, name }) => (
                <OrdersHistoryCard
                  name={name}
                  number={number}
                  createdAt={createdAt}
                  ingredientsIds={ingredients}
                />
              )}
            />
            <FeedSummary
              orders={orders}
              totalTodayOrders={totalTodayOrders}
              totalOrders={totalOrders}
            />
          </>
        )}
      </div>
    </section>
  );
};
