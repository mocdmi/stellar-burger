import { Tab } from '@krgaa/react-developer-burger-ui-components';

import { IngredientsCard } from './components/ingredients-card/ingredients-card';
import { IngredientsGroup } from './components/ingredients-group/ingredients-group';
import { IngredientsGroups } from './components/ingridients-groups/ingridients-groups';
import { useIngredientsGroups } from './hooks/use-ingredients-groups';

import type { TIngredient } from '@utils/types';

import styles from './burger-ingredients.module.css';

type TBurgerIngredientsProps = {
  ingredients: TIngredient[];
};

export const BurgerIngredients = ({
  ingredients,
}: TBurgerIngredientsProps): React.JSX.Element => {
  const { groupedIngredients } = useIngredientsGroups(ingredients);

  return (
    <section className={styles.burger_ingredients}>
      <nav>
        <ul className={styles.menu}>
          <Tab
            value="bun"
            active={true}
            onClick={() => {
              /* TODO */
            }}
          >
            Булки
          </Tab>
          <Tab
            value="main"
            active={false}
            onClick={() => {
              /* TODO */
            }}
          >
            Начинки
          </Tab>
          <Tab
            value="sauce"
            active={false}
            onClick={() => {
              /* TODO */
            }}
          >
            Соусы
          </Tab>
        </ul>
      </nav>
      <div className={`${styles.scrolled} custom-scroll mb-10`}>
        {
          <IngredientsGroups
            groupedIngredients={groupedIngredients}
            renderGroup={({ ingredientsGroupType, ingredients }) => (
              <IngredientsGroup
                ingredientsGroupType={ingredientsGroupType}
                ingredients={ingredients}
                renderIngredientCard={(ingredient) => (
                  <IngredientsCard ingredient={ingredient} />
                )}
              />
            )}
          />
        }
      </div>
    </section>
  );
};
