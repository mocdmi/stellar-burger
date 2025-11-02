import styles from './ingredient-nutrion.module.css';

type TIngredientNutrionProps = {
  title: string;
  value: number;
};

export const IngredientNutrion = ({
  title,
  value,
}: TIngredientNutrionProps): React.JSX.Element => {
  return (
    <div className={styles.ingredient_nutrion}>
      <div className="text text_type_main-default text_color_inactive">{title}</div>
      <div className="text text_type_main-default text_color_inactive">{value}</div>
    </div>
  );
};
