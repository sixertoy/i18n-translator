import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  button: {
    background: '#FFFFFF',
    borderRadius: 4,
    color: '#000000',
    composes: ['py20', 'px35'],
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

const StartComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Link className={classes.button} to="/create">
        <span>Create a new language project</span>
      </Link>
    </div>
  );
};

StartComponent.defaultProps = {};

StartComponent.propTypes = {};

export default StartComponent;
