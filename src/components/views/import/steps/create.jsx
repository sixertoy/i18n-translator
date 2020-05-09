import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectIsLogged } from '../../../../redux/selectors';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    composes: ['py12', 'px24', 'fs18'],
    width: theme.sizes.form,
  }),
  container: {
    composes: ['flex-rows', 'flex-center', 'items-center'],
    height: '70%',
  },
  inner: ({ theme }) => ({
    border: '1px solid #000000',
    borderRadius: 4,
    composes: ['is-block', 'mb12', 'is-relative', 'px24', 'py24'],
    width: theme.sizes.form,
  }),
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
  const theme = useTheme();
  const classes = useStyles({ theme });
  const isLogged = useSelector(selectIsLogged);
  return (
    <div className={classes.container}>
      <label className={classes.inner} htmlFor="project.name">
        <span className={classes.label}>
          <span>Nom du projet</span>
        </span>
        <input
          className={classes.input}
          defaultValue={name}
          disabled={!isLogged}
          name="project.name"
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
