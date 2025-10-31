import React from 'react';

import type { TConstructorCardProps } from '../../types/common';
import type { TConstructorIngredient } from '@/utils/types';
import type { ReactNode } from 'react';

import styles from './constructor-ingredients.module.css';

type ConstructorIngredientsProps = {
  bun: TConstructorIngredient | null;
  filling: TConstructorIngredient[];
  renderCard: ({ ingredient, position }: TConstructorCardProps) => ReactNode;
};

export const ConstructorIngredients = ({
  bun,
  filling,
  renderCard,
}: ConstructorIngredientsProps): React.JSX.Element => {
  return (
    <div className={`${styles.constructor_ingredients}`}>
      {bun && renderCard({ ingredient: bun, position: 'top' })}

      {filling.length > 0 && (
        <div className={`${styles.filling} custom-scroll`}>
          {filling.map((ingredient) => (
            <React.Fragment key={ingredient.instanceId}>
              {renderCard({ ingredient })}
            </React.Fragment>
          ))}
        </div>
      )}

      {bun && renderCard({ ingredient: bun, position: 'bottom' })}
    </div>
  );
};
