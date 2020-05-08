import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    '& + &': { marginTop: 12 },
    background: '#000000',
    borderRadius: 4,
    composes: ['fs18', 'is-block', 'py12', 'px24'],
    width: 250,
  },
});

const ReactDumbComponent = ({ children, className, onClick }) => {
  const classes = useStyles();
  return (
    <button
      className={classnames(classes.button, className)}
      type="button"
      onClick={onClick}>
      {children}
    </button>
  );
};

ReactDumbComponent.defaultProps = {
  className: null,
};

ReactDumbComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ReactDumbComponent;
