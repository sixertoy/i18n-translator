import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Bar from './bar';
import CountLabel from './label-count';
import PercentLabel from './label-percent';

const POSITION_BEFORE = 'before';
const POSITION_AFTER = 'after';

const useStyles = createUseStyles({
  percentage: {
    composes: ['flex-columns', 'items-center', 'flex-start'],
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%',
  },
});

function getPercent(count, total, rounded) {
  const countIsValid = !Number.isNaN(count) && count >= 0;
  const totalIsValid = !Number.isNaN(total) && total > 0;
  if (!totalIsValid || !countIsValid) return 0;
  let percent = (count * 100) / total;
  percent = Math.round(percent * 10) / 10;
  if (!rounded) return percent;
  return Math.round(percent);
}

const PercentageBarComponent = React.memo(
  ({
    className,
    count,
    position,
    rounded,
    showCount,
    showPercent,
    size,
    total,
  }) => {
    const theme = useTheme();
    const showBar = total > 0;
    const classes = useStyles({ position, size, theme });
    const percent = getPercent(count, total, rounded);
    return (
      <div className={classnames(classes.percentage, className)}>
        {position === POSITION_BEFORE && (
          <React.Fragment>
            {showCount && <CountLabel count={count} total={total} />}
            {showPercent && <PercentLabel percent={percent} />}
          </React.Fragment>
        )}
        {showBar && <Bar percent={percent} size={size} />}
        {position === POSITION_AFTER && (
          <React.Fragment>
            {showCount && <CountLabel count={count} total={total} />}
            {showPercent && <PercentLabel percent={percent} />}
          </React.Fragment>
        )}
      </div>
    );
  }
);

PercentageBarComponent.defaultProps = {
  position: 'after',
  rounded: false,
  showCount: false,
  showPercent: false,
  size: 'normal',
};

PercentageBarComponent.propTypes = {
  className: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  position: PropTypes.oneOf(['before', 'after']),
  // TODO replace rounded by decimal
  rounded: PropTypes.bool,
  showCount: PropTypes.bool,
  showPercent: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'normal', 'large', 'big']),
  total: PropTypes.number.isRequired,
};

export default PercentageBarComponent;
