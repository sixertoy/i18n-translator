import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    composes: ['py12', 'px24'],
  },
  container: {
    composes: ['flex-columns', 'flex-center', 'items-center'],
    height: '100%',
  },
});

const IntroComponent = ({ onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <button className={classes.button} type="button" onClick={onClick}>
        <span>Commencer</span>
      </button>
    </div>
  );
};

IntroComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default IntroComponent;
