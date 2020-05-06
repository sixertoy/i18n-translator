import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const SIZE_TINY = 1;
const SIZE_SMALL = 3;
const SIZE_NORMAL = 7;
const SIZE_LARGE = 15;
const SIZE_BIG = 23;
const POSITION_BEFORE = 'before';
const POSITION_AFTER = 'after';

const getSizeObject = size => {
  let height = null;
  switch (size) {
    case 'tiny':
      height = SIZE_TINY;
      break;
    case 'small':
      height = SIZE_SMALL;
      break;
    case 'large':
      height = SIZE_LARGE;
      break;
    case 'big':
      height = SIZE_BIG;
      break;
    default:
    case 'normal':
      height = SIZE_NORMAL;
      break;
  }
  return {
    borderRadius: height / 2,
    height,
    maxHeight: height,
    minHeight: height,
  };
};

const useStyles = createUseStyles({
  background: ({ size, theme }) => ({
    ...getSizeObject(size),
    background: theme.triangle,
    bottom: 0,
    composes: ['is-absolute'],
    left: 0,
    right: 0,
    top: 0,
    zIndex: 10,
  }),
  label: ({ position }) => ({
    composes: ['flex-1'],
    marginLeft: position === POSITION_AFTER ? 7 : 0,
    marginRight: position === POSITION_BEFORE ? 7 : 0,
  }),
  percentage: {
    composes: ['flex-columns', 'items-center', 'flex-start'],
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%',
  },
  progress: ({ size, theme }) => ({
    ...getSizeObject(size),
    background: theme.header,
    bottom: 0,
    composes: ['is-absolute'],
    left: 0,
    top: 0,
    zIndex: 20,
  }),
  wrapper: ({ size }) => ({
    ...getSizeObject(size),
    composes: ['is-relative', 'no-overflow', 'flex-1'],
  }),
});

const PercentageBarComponent = React.memo(
  ({ className, count, position, showCount, showPercent, size, total }) => {
    const theme = useTheme();
    const classes = useStyles({ position, size, theme });
    const percent = (count * 100) / total;
    const right = `${100 - percent}%`;
    return (
      <div className={classnames(classes.percentage, className)}>
        {(showCount || showPercent) && position === POSITION_BEFORE && (
          <div className={classes.label}>
            <span>
              {showPercent && `${percent}%`}
              {showCount && `${count}/${total}`}
            </span>
          </div>
        )}
        <div className={classes.wrapper}>
          <span className={classes.background} />
          <span className={classes.progress} style={{ right }} />
        </div>
        {(showCount || showPercent) && position === POSITION_AFTER && (
          <div className={classes.label}>
            <span>
              {showPercent && `${percent}%`}
              {showCount && `${count}/${total}`}
            </span>
          </div>
        )}
      </div>
    );
  }
);

PercentageBarComponent.defaultProps = {
  position: 'after',
  showCount: false,
  showPercent: false,
  size: 'small',
};

PercentageBarComponent.propTypes = {
  className: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  position: PropTypes.oneOf(['before', 'after']),
  showCount: PropTypes.bool,
  showPercent: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'normal', 'large', 'big']),
  total: PropTypes.number.isRequired,
};

export default PercentageBarComponent;
