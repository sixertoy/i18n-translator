import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import Bar from './bar';
import Count from './count';
import { getPercent } from './utils';

const POSITION_BEFORE = 'before';
const POSITION_AFTER = 'after';

const useStyles = createUseStyles({
  bar: ({ position }) => ({
    marginLeft: position === POSITION_BEFORE ? 7 : 0,
    marginRight: position === POSITION_AFTER ? 7 : 0,
  }),
  percentage: {
    composes: ['flex-columns', 'items-center', 'flex-start', 'is-full-width'],
  },
});

const PercentageBarComponent = React.memo(
  ({ className, count, position, size, total, useCount }) => {
    const classes = useStyles({ position });
    const percent = getPercent(count, total, true);
    const disabled = Boolean(
      Number.isNaN(total) || Number.isNaN(count) || total <= 0 || count < 0
    );
    return (
      <div className={classnames(classes.percentage, className)}>
        {useCount && position === POSITION_BEFORE && (
          <Count
            count={count}
            disabled={disabled}
            percent={percent}
            total={total}
            useCount={useCount}
          />
        )}
        {!disabled && (
          <Bar className={classes.bar} percent={percent} size={size} />
        )}
        {useCount && position === POSITION_AFTER && (
          <div className={classes.after}>
            <Count
              count={count}
              disabled={disabled}
              percent={percent}
              total={total}
              useCount={useCount}
            />
          </div>
        )}
      </div>
    );
  }
);

PercentageBarComponent.defaultProps = {
  position: 'after',
  // rounded: false,
  size: 'normal',
  useCount: false,
};

PercentageBarComponent.propTypes = {
  className: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  position: PropTypes.oneOf(['before', 'after']),
  // TODO replace rounded by decimal
  // rounded: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'normal', 'large', 'big']),
  total: PropTypes.number.isRequired,
  useCount: PropTypes.oneOf(['count', 'percent', false]),
};

export default PercentageBarComponent;
