import PropTypes from 'prop-types';
import React from 'react';
import { AiFillLock as LockIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import Button from '../../../commons/button';
import Tooltip from '../../../commons/tooltip';
import { useFormStyles } from './styles';

const useStyles = createUseStyles({
  button: {
    composes: ['mt12'],
    width: '100%',
  },
  container: {
    marginTop: '8%',
  },
  icon: ({ theme }) => ({
    color: theme.colors.grey,
    composes: ['use-pointer', 'fs18', 'ml7', 'text-center'],
    width: 30,
  }),
  tooltip: ({ theme }) => ({
    borderRadius: theme.radius.small,
  }),
});

const StepProjectComponent = ({ name, onClick }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const formClasses = useFormStyles({ theme });

  return (
    <div className={classes.container} id="step-create">
      <div className={formClasses.form}>
        <div className={formClasses.field}>
          <label className={formClasses.label} htmlFor="project.name">
            <span>Nom du projet</span>
          </label>
          <input
            className={formClasses.input}
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
