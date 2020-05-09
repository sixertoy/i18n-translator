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
  bar: ({ size }) => ({
    ...getSizeObject(size),
    composes: ['is-relative', 'no-overflow', 'flex-1'],
  }),
  progress: ({ size, theme }) => ({
    ...getSizeObject(size),
    background: theme.header,
    bottom: 0,
    composes: ['is-absolute'],
    left: 0,
    right: 0,
    top: 0,
    transition: 'right 0.5s',
    zIndex: 20,
  }),
});

const ReactDumbComponent = React.memo(({ percent, size }) => {
  const theme = useTheme();
  const classes = useStyles({ size, theme });
  return (
    <div className={classes.bar}>
      <span className={classes.background} />
      <span
        className={classes.progress}
        style={{ right: `${100 - percent}%` }}
      />
    </div>
  );
});

ReactDumbComponent.defaultProps = {
  size: 'normal',
};

ReactDumbComponent.propTypes = {
  percent: PropTypes.number.isRequired,
  size: PropTypes.string,
};

export default ReactDumbComponent;
