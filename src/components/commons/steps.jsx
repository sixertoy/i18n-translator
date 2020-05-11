import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineCheck as CheckIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import { px } from '../../core/utils';

const useStyles = createUseStyles({
  item: {
    '&.after': { opacity: 0.45 },
    '&.last': { flex: 'none' },
    composes: ['mr12', 'no-overflow', 'flex-1', 'no-wrap'],
    lineHeight: px(28),
  },
  itemCircle: ({ theme }) => ({
    '.active &': { background: theme.colors.black, color: theme.colors.white },
    background: 'transparent',
    border: `1px solid ${theme.colors.black}`,
    borderRadius: '100%',
    color: '#000000',
    composes: ['fs10', 'mr5', 'is-inline-block', 'text-center'],
    height: 28,
    lineHeight: px(28),
    width: 28,
  }),
  itemLabel: ({ theme }) => ({
    '&:after': {
      background: theme.colors.black,
      content: '""',
      height: 1,
      left: '100%',
      position: 'absolute',
      right: 0,
      top: 16,
      width: '9999px',
    },
    color: theme.colors.black,
    composes: ['fs16', 'is-inline-block', 'is-relative', 'pr7'],
  }),
  items: {
    composes: ['flex-columns', 'flex-between', 'items-center'],
  },
  steps: {},
});

const StepsComponent = React.memo(({ current, steps }) => {
  const theme = useTheme();
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
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        path: PropTypes.string,
        // onClick: PropTypes.func,
        // icon: PropTypes.string,
      })
    ),
  ]).isRequired,
};

export default StepsComponent;
