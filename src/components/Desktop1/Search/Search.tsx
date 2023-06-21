import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Search.module.css';
import { SearchIcon } from './SearchIcon';

interface Props {
  className?: string;
  classes?: {
    search?: string;
    root?: string;
  };
  swap?: {
    search?: ReactNode;
  };
}
/* @figmaId 1:77 */
export const Search: FC<Props> = memo(function Search(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.search || ''} ${classes.search}`}>
        {props.swap?.search || <SearchIcon className={classes.icon} />}
      </div>
    </div>
  );
});
