import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {},
  container: {},
});

const IntroComponent = ({ onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <button type="button" onClick={onClick}>
        <span>Commencer</span>
      </button>
    </div>
  );
};

IntroComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default IntroComponent;
