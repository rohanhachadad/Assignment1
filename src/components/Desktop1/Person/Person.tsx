import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Person.module.css';
import { PersonIcon } from './PersonIcon';

interface Props {
  className?: string;
  classes?: {
    person?: string;
    root?: string;
  };
  swap?: {
    person?: ReactNode;
  };
}
/* @figmaId 1:79 */
export const Person: FC<Props> = memo(function Person(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.person || ''} ${classes.person}`}>
        {props.swap?.person || <PersonIcon className={classes.icon} />}
      </div>
    </div>
  );
});
