import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineCheck as CheckIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

import { px, rgba } from '../../../../core/utils';

const useStyles = createUseStyles({
  circle: {
    '.active &': {
      background: '#FD7822',
      color: '#FFFFFF',
    },
    '.before &': {
      background: '#EE256B',
      color: '#FFFFFF',
    },
    background: rgba('#000000', 0.1),
    borderRadius: '100%',
    color: rgba('#000000', 0.65),
    composes: ['fs10', 'mr5', 'is-inline-block', 'text-center'],
    height: 28,
    lineHeight: px(28),
    width: 28,
  },
  item: {
    '&.after': { opacity: 0.45 },
    '&.last': { flex: 'none' },
    composes: ['mr12', 'no-overflow', 'flex-1', 'no-wrap'],
    lineHeight: px(28),
  },
  label: {
    '&:after': {
      background: rgba('#000000', 0.45),
      content: '""',
      height: 1,
      left: '100%',
      position: 'absolute',
      right: 0,
      top: 16,
      width: '9999px',
    },
    '.active &': { color: '#FD7822', fontWeight: 'bold' },
    color: rgba('#000000', 0.45),
    composes: ['fs16', 'is-inline-block', 'is-relative', 'pr7'],
  },
});

const StepComponent = React.memo(({ className, index, isBefore, item }) => {
  const classes = useStyles();
  const label = item.label || item;
  return (
    <div className={classnames(classes.item, className)}>
      <span className={classes.circle}>
        {isBefore && <CheckIcon />}
        {!isBefore && index + 1}
      </span>
      <span className={classes.label}>{label}</span>
    </div>
  );
});

StepComponent.defaultProps = {
  isBefore: false,
};

StepComponent.propTypes = {
  className: PropTypes.shape({
    active: PropTypes.bool,
    after: PropTypes.bool,
    before: PropTypes.bool,
    last: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isBefore: PropTypes.bool,
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]).isRequired,
};

export default StepComponent;
