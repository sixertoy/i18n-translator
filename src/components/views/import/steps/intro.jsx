import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    composes: ['py12', 'px24', 'fs18'],
    width: 350,
  },
  container: {
    composes: ['flex-rows', 'flex-center', 'items-center'],
    height: '70%',
  },
  inner: {
    border: '1px solid #000000',
    borderRadius: 4,
    composes: ['is-block', 'mb12', 'is-relative', 'px24', 'py24'],
    width: 350,
  },
  input: {
    '&::disabled': { userSelect: 'none' },
    composes: ['is-block', 'fs24', 'is-bold'],
    width: '100%',
  },
  label: {
    background: '#F1F1F1',
    composes: ['is-absolute', 'is-bold', 'px5', 'py5'],
    left: 12,
    top: -12,
  },
});

const IntroComponent = ({ name, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <label className={classes.inner} htmlFor="project.name">
        <span className={classes.label}>Nom du projet</span>
        <input
          disabled
          className={classes.input}
          defaultValue={name}
          id="project.name"
          type="text"
        />
      </label>
      <button className={classes.button} type="button" onClick={onClick}>
        <span>Créer</span>
      </button>
    </div>
  );
};

IntroComponent.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IntroComponent;
