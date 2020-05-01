import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles(theme => ({
  button: {
    background: theme.colors.dark,
    borderRadius: 4,
    color: theme.colors.white,
    composes: ['py20', 'px32'],
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
}));

const StartComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
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
