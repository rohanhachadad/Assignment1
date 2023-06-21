import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';
import { Garden_cart } from './Garden_cart/Garden_cart';
import { Garden_cartIcon } from './Garden_cartIcon';
import { Image2 } from './Image2/Image2';
import { OurOffer_Property1Default } from './OurOffer_Property1Default/OurOffer_Property1Default';
import { Person } from './Person/Person';
import { PersonIcon } from './PersonIcon';
import { Search } from './Search/Search';
import { SearchIcon } from './SearchIcon';

interface Props {
  className?: string;
}
/* @figmaId 0:5 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <Image2 />
      <div className={classes.rectangle2}></div>
      <div className={classes.bedroom}>Bedroom</div>
      <div className={classes.kitchenDining}>Kitchen &amp; Dining</div>
      <OurOffer_Property1Default className={classes.ourOffer} />
      <Garden_cart
        className={classes.garden_cart2}
        classes={{ garden_cart: classes.garden_cart }}
        swap={{
          garden_cart: (
            <div className={classes.garden_cart}>
              <Garden_cartIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      <Person
        className={classes.person2}
        classes={{ person: classes.person }}
        swap={{
          person: (
            <div className={classes.person}>
              <PersonIcon className={classes.icon2} />
            </div>
          ),
        }}
      />
      <Search
        className={classes.search2}
        classes={{ search: classes.search }}
        swap={{
          search: (
            <div className={classes.search}>
              <SearchIcon className={classes.icon3} />
            </div>
          ),
        }}
      />
    </div>
  );
});
