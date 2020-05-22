import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { AiFillLock as LockIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectProject } from '../../../../redux/selectors';
import Button from '../../../commons/button';
import Tooltip from '../../../commons/tooltip';
import { useStepStyles } from '../../../styles';

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

const StepProjectComponent = ({ onSubmit }) => {
  const theme = useTheme();
  const { id } = useParams();
  const classes = useStyles({ theme });
  const stepStyles = useStepStyles({ theme });
  const project = useSelector(state => selectProject(state, id));

  const onClickHandler = useCallback(() => {
    onSubmit();
  }, [onSubmit]);
  const restricted = false;
  return (
    <div className={classes.container} id="step-project">
      <div className={stepStyles.form}>
        <div className={stepStyles.field}>
          <label className={stepStyles.label} htmlFor="project.name">
            <span>Nom du projet</span>
          </label>
          <input
            className={stepStyles.input}
            defaultValue={project.name}
            disabled={restricted}
            name="project.name"
            type="text"
          />
          {restricted && (
            <Tooltip
              useHover
              className={classes.tooltip}
              interactive={false}
              maxWidth={240}
              offset={[3, 0]}
              placement="right-end"
              title="Vous devez être connecté pour personnaliser le titre de ce projet">
              <span className={classes.icon}>
                <LockIcon />
              </span>
            </Tooltip>
          )}
        </div>
        <Button className={classes.button} onClick={onClickHandler}>
          <span>Suivant</span>
        </Button>
      </div>
    </div>
  );
};

StepProjectComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default StepProjectComponent;
