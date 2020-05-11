import PropTypes from 'prop-types';
import React from 'react';
import { AiFillLock as LockIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import Button from '../../../commons/button';
import Tooltip from '../../../commons/tooltip';

const useStyles = createUseStyles({
  button: {
    composes: ['mt12'],
    width: '100%',
  },
  container: {
    marginTop: '8%',
  },
  field: ({ theme }) => ({
    borderColor: theme.colors.black,
    borderRadius: theme.radius.small,
    borderStyle: 'solid',
    borderWidth: 1,
    composes: [
      'is-block',
      'is-relative',
      'pl24',
      'px7',
      'py24',
      'flex-columns',
      'items-center',
    ],
    height: 'auto',
    width: '100%',
  }),
  form: {
    margin: '0 auto',
    width: 350,
  },
  icon: ({ theme }) => ({
    color: theme.colors.grey,
    composes: ['use-pointer', 'fs18', 'ml7', 'text-center'],
    width: 30,
  }),
  input: {
    // TODO add disabled state
    '&:disabled': { opacity: 0.65 },
    composes: ['fs24', 'is-bold', 'flex-1'],
  },
  label: ({ theme }) => ({
    background: theme.colors.lighter,
    composes: ['is-absolute', 'is-bold', 'p5'],
    left: 12,
    top: -12,
  }),
  tooltip: ({ theme }) => ({
    borderRadius: theme.radius.small,
  }),
});

const StepProjectComponent = ({ name, onClick }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container} id="step-create">
      <div className={classes.form}>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="project.name">
            <span>Nom du projet</span>
          </label>
          <input
            className={classes.input}
            defaultValue={name}
            name="project.name"
            type="text"
          />
          <Tooltip
            className={classes.tooltip}
            maxWidth={240}
            offset={[3, 0]}
            placement="right-end"
            title="Vous devez être connecté pour personnaliser le titre de ce projet">
            <span className={classes.icon}>
              <LockIcon />
            </span>
          </Tooltip>
        </div>
        <Button className={classes.button} onClick={onClick}>
          <span>Créer</span>
        </Button>
      </div>
    </div>
  );
};

StepProjectComponent.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StepProjectComponent;
