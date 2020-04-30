import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  button: {
    background: '#661E75',
    borderRadius: 4,
    fontSize: '0.8em',
    padding: '20px 35px',
    textAlign: 'center',
  },
  container: {
    composes: [
      'text-center',
      'flex-columns',
      'flex-center',
      'items-center',
      'is-full-layout',
    ],
  },
});

const WelcomeComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Link className={classes.button} to="/import">
        <span>Create or import a new language set</span>
      </Link>
    </div>
  );
};

WelcomeComponent.defaultProps = {};

WelcomeComponent.propTypes = {};

export default WelcomeComponent;
