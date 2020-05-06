import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  button: {},
  container: {},
  link: {},
});

const FinishComponent = ({ onRestart }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <button className={classes.button} type="button" onClick={onRestart}>
        <span>Ajouter un autre langage</span>
      </button>
      <Link className={classes.link} to="/board">
        <span>Voir les projets</span>
      </Link>
    </div>
  );
};

FinishComponent.propTypes = {
  onRestart: PropTypes.func.isRequired,
};

export default FinishComponent;
