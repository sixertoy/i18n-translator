import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const loader = React.memo(({ className }) => {
  return <div className={classnames('csspreloader', className)} />;
});

loader.defaultProps = {
  className: '',
};

loader.propTypes = {
  className: PropTypes.string,
};

export default loader;
