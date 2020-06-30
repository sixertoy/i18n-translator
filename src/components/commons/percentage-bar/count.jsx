import PropTypes from 'prop-types';
import React from 'react';

const CountLabelComponent = React.memo(
  ({ count, disabled, percent, total, useCount }) => {
    let label = `${count}/${total}`;
    if (useCount === 'percent') label = `${percent}%`;
    return (
      <div className="flex-1 percent">
        {disabled && <span>n/a</span>}
        {!disabled && <span>{label}</span>}
      </div>
    );
  }
);

CountLabelComponent.defaultProps = {
  disabled: false,
  useCount: false,
};

CountLabelComponent.propTypes = {
  count: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  percent: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  useCount: PropTypes.oneOf([false, 'percent', 'count']),
};

export default CountLabelComponent;
