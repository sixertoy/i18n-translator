import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineCheck as CheckIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    '&.after': { opacity: 0.45 },
    '&.last': { flex: 'none' },
    composes: ['mr12', 'no-overflow', 'flex-1'],
    lineHeight: '28px',
    whiteSpace: 'nowrap',
  },
  itemCircle: {
    '.active &': { background: '#000000', color: '#FFFFFF' },
    background: 'transparent',
    border: '1px solid #000000',
    borderRadius: 14,
    color: '#000000',
    composes: ['fs10', 'mr5', 'is-inline-block', 'text-center'],
    height: 28,
    lineHeight: '28px',
    width: 28,
  },
  itemLabel: {
    '&:after': {
      background: '#000000',
      content: '""',
      height: 1,
      left: '100%',
      position: 'absolute',
      right: 0,
      top: 16,
      width: '9999px',
    },
    color: '#000000',
    composes: ['fs16', 'is-inline-block', 'is-relative', 'pr7'],
  },
  items: {
    composes: ['flex-columns', 'flex-between', 'items-center'],
  },
  steps: {},
});

const StepsComponent = React.memo(({ current, steps }) => {
  const theme = useStyles();
  const classes = useStyles({ theme });
  const lastIndex = steps.length - 1;
  return (
    <div className={classes.steps}>
      <div className={classes.items}>
        {steps.map((val, index) => {
          const after = current < index;
          const before = current > index;
          const active = current === index;
          const last = index === lastIndex;
          return (
            <div
              key={val.label || val}
              className={classnames(classes.item, {
                active,
                after,
                before,
                last,
              })}>
              <span className={classes.itemCircle}>
                {(!before && index + 1) || <CheckIcon />}
              </span>
              <span className={classes.itemLabel}>{val.label || val}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
});

StepsComponent.defaultProps = {
  current: 0,
};

StepsComponent.propTypes = {
  current: PropTypes.number,
  steps: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape()),
  ]).isRequired,
};

export default StepsComponent;
