import PropTypes from 'prop-types';
import React from 'react';
// import { AiOutlineSave as SaveIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    background: '#000000',
    borderRadius: 4,
    color: '#FFFFFF',
    composes: ['use-pointer', 'py12', 'px12', 'text-center', 'mx7'],
    width: 250,
  },
  container: {
    composes: ['flex-columns', 'flex-center', 'flex-start'],
    paddingTop: '10%',
  },
  splitter: {
    composes: ['is-block', 'py12', 'text-center', 'mx7'],
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
      <span className={classes.splitter}>
        <span>-&nbsp;Ou&nbsp;-</span>
      </span>
      <button className={classes.button} type="button" onClick={onSubmit}>
        <span>Continuer</span>
      </button>
    </div>
  );
};

FinishComponent.propTypes = {
  onRestart: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FinishComponent;
