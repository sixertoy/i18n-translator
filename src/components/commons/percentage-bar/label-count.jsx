import PropTypes from 'prop-types';
import React from 'react';

const CountLabelComponent = React.memo(({ count, total }) => {
  const text = total && total > 0 ? `${count}/${total}` : 'n/a';
  return (
    <div className="flex-1">
      <span>{text}</span>
    </div>
  );
});

CountLabelComponent.propTypes = {
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default CountLabelComponent;
