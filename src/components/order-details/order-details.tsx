import Success from './images/success.svg';

import styles from './order-details.module.css';

export const OrderDetails = (): React.JSX.Element => {
  return (
    <div className={`${styles.order_details} pt-30 pb-30 pl-10 pr-10`}>
      <div className="text text_type_digits-large mb-8">034536</div>
      <div className="text text_type_main-medium mb-15">идентификатор заказа</div>
      <img className="mb-15" src={Success} alt="Успешно" />
      <div className="text text_type_main-small mb-2">Ваш заказ начали готовить</div>
      <div className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </div>
    </div>
  );
};
