import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Image2.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:62 */
export const Image2: FC<Props> = memo(function Image2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.image2}></div>
    </div>
  );
});
