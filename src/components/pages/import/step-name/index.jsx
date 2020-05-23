import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { AiFillLock as LockIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import Button from '../../../commons/button';
import Tooltip from '../../../commons/tooltip';
import { useStepStyles } from '../../../styles';
import useStep from '../use-step';

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
    width: 120,
  }),
});

const StepNameComponent = ({ index }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const stepStyles = useStepStyles({ theme });
  const { draft, onStepChange } = useStep(index);
  const input = useRef(draft.name);

  const onClick = useCallback(
    evt => {
      evt.preventDefault();
      const name = input.current.value;
      console.log('name => ', name);
      onStepChange({ name });
    },
    [onStepChange]
  );

  return (
    <div className={classes.container} id="step-project">
      <div className={stepStyles.form}>
        <div className={stepStyles.field}>
          <label className={stepStyles.label} htmlFor="project.name">
            <span>Nom du projet</span>
          </label>
          <input
            ref={input}
            className={stepStyles.input}
            defaultValue={input.current}
            // disabled={restricted}
            name="project.name"
            type="text"
          />
          <Tooltip
            useHover
            className={classes.tooltip}
            interactive={false}
            offset={[3, 0]}
            placement="right-end"
            title="Vous devez être connecté pour personnaliser le titre de ce projet">
            <div className={classes.icon}>
              <LockIcon />
            </div>
          </Tooltip>
        </div>
        <Button className={classes.button} onClick={onClick}>
          <span>Suivant</span>
        </Button>
      </div>
    </div>
  );
};

StepNameComponent.propTypes = {
  index: PropTypes.number.isRequired,
};

export default StepNameComponent;
