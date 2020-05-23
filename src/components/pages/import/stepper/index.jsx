import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Item from './item';

const useStyles = createUseStyles({
  items: {
    composes: ['flex-columns', 'flex-between', 'items-center'],
  },
  steps: {},
  [`@media (max-width: ${600}px)`]: {
    itemLabel: {
      '&:not(.active)': {
        display: 'none',
        visibility: 'hidden',
      },
    },
  },
});

const StepperComponent = React.memo(({ step, steps, useZero }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const lastIndex = steps.length - 1;
  const current = useZero ? step : step - 1;
  return (
    <div className={classes.steps}>
      <div className={classes.items}>
        {steps.map((obj, index) => {
          const after = current < index;
          const before = current > index;
          const active = current === index;
          const last = index === lastIndex;
          return (
            <Item
              key={obj.key}
              className={{ active, after, before, last }}
              index={index}
              isBefore={before}
              item={obj}
            />
          );
        })}
      </div>
    </div>
  );
});

StepperComponent.defaultProps = {
  step: 0,
  useZero: false,
};

StepperComponent.propTypes = {
  step: PropTypes.number,
  steps: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({
        Component: PropTypes.func,
        key: PropTypes.string,
        label: PropTypes.string,
      })
    ),
  ]).isRequired,
  useZero: PropTypes.bool,
};

export default StepperComponent;
