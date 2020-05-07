import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    background: '#000000',
    borderRadius: 4,
    color: '#FFFFFF',
    composes: ['use-pointer', 'py12', 'px24', 'mb12', 'text-center'],
    width: 300,
  },
  container: {
    composes: ['flex-rows', 'flex-center', 'items-center'],
    height: '100%',
  },
});

const FinishComponent = ({ onRestart, onSubmit }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <button className={classes.button} type="button" onClick={onRestart}>
        <span>Ajouter un autre langage</span>
      </button>
      <button className={classes.button} type="button" onClick={onSubmit}>
        <span>Créer et Voir les projets</span>
      </button>
    </div>
  );
};

FinishComponent.propTypes = {
  onRestart: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FinishComponent;
