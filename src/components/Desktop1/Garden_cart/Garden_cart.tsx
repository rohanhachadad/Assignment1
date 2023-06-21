import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Garden_cart.module.css';
import { Garden_cartIcon } from './Garden_cartIcon';

interface Props {
  className?: string;
  classes?: {
    garden_cart?: string;
    root?: string;
  };
  swap?: {
    garden_cart?: ReactNode;
  };
}
/* @figmaId 1:78 */
export const Garden_cart: FC<Props> = memo(function Garden_cart(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.garden_cart || ''} ${classes.garden_cart}`}>
        {props.swap?.garden_cart || <Garden_cartIcon className={classes.icon} />}
      </div>
    </div>
  );
});
