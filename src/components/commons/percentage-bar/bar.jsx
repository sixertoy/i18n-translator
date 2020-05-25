import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const SIZE_TINY = 1;
const SIZE_SMALL = 3;
const SIZE_NORMAL = 7;
const SIZE_LARGE = 15;
const SIZE_BIG = 23;

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
  progress: ({ size }) => ({
    ...getSizeObject(size),
    composes: ['is-relative', 'no-overflow', 'flex-1'],
  }),
  thumb: ({ size, theme }) => ({
    ...getSizeObject(size),
    background: theme.colors.white,
    composes: ['is-overlay'],
    transition: 'right 0.5s',
    zIndex: 20,
  }),
  track: ({ size, theme }) => ({
    ...getSizeObject(size),
    background: theme.colors.grey,
    composes: ['is-overlay'],
    zIndex: 10,
  }),
});

const ProgresBarComponent = React.memo(({ className, percent, size }) => {
  const theme = useTheme();
  const classes = useStyles({ size, theme });
  return (
    <div className={classnames(classes.progress, className)}>
      <span className={classnames(classes.track, 'progress-track')} />
      <span
        className={classnames(classes.thumb, 'progress-thumb')}
        style={{ right: `${100 - percent}%` }}
      />
    </div>
  );
});

ProgresBarComponent.defaultProps = {
  className: '',
  size: 'normal',
};

ProgresBarComponent.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number.isRequired,
  size: PropTypes.string,
};

export default ProgresBarComponent;
