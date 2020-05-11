import PropTypes from 'prop-types';
import React from 'react';
import { AiFillLock as LockIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectIsLogged, selectLimits } from '../../../../redux/selectors';
import Tooltip from '../../../commons/tooltip';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    composes: ['py12', 'px24', 'fs18'],
    width: theme.sizes.stepinput,
  }),
  container: {
    composes: ['flex-rows', 'flex-center', 'items-center'],
    height: '70%',
  },
  icon: ({ theme }) => ({
    color: theme.colors.grey,
    composes: ['use-pointer', 'fs18', 'ml7'],
  }),
  inner: ({ theme }) => ({
    border: `1px solid ${theme.colors.black}`,
    borderRadius: theme.radius.small,
    composes: ['is-block', 'mb12', 'is-relative', 'pl24', 'px7', 'py24'],
    height: 'auto',
    width: theme.sizes.stepinput,
  }),
  input: ({ theme }) => ({
    // TODO add disabled state
    composes: ['fs24', 'is-bold'],
    width: theme.sizes.stepbutton,
  }),
  label: ({ theme }) => ({
    background: theme.colors.white,
    composes: ['is-absolute', 'is-bold', 'p5'],
    left: 12,
    top: -12,
  }),
});

const StepProjectComponent = ({ name, onClick }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const isLogged = useSelector(selectIsLogged);

  const { id } = useParams();
  const { hasReach, limited } = useSelector(state => selectLimits(state, id));
  const isLocked = limited && hasReach;

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
        <Tooltip
          className="tooltip-help"
          maxWidth={160}
          placement="right-end"
          title="Connectez-vous pour personnaliser le titre de ce projet"
          trigger="mouseenter focus click">
          <span className={classes.icon}>
            <LockIcon />
          </span>
        </Tooltip>
      </label>
      <button
        className={classes.button}
        disabled={isLocked}
        type="button"
        onClick={onClick}>
        <span>Créer</span>
      </button>
    </div>
  );
};

StepProjectComponent.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StepProjectComponent;
