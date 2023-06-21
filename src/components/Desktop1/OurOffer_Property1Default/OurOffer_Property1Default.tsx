import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './OurOffer_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1:44 */
export const OurOffer_Property1Default: FC<Props> = memo(function OurOffer_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ourOffer}>Our Offer</div>
    </div>
  );
});
