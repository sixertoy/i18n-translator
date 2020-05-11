import PropTypes from 'prop-types';
import React from 'react';

const PercentLabelComponent = React.memo(({ percent }) => {
  const text = !Number.isNaN(percent) ? `${percent}%` : 'n/a';
  return (
    <div className="flex-1">
      <span>{text}</span>
    </div>
  );
});

PercentLabelComponent.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default PercentLabelComponent;
