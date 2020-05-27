import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { AiFillLock as LockIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

import Button from '../../../commons/button';
import Tooltip from '../../../commons/tooltip';
import useStepStyles from '../styles';
import useStep from '../use-step';

const useStyles = createUseStyles({
  button: {
    composes: ['mt12'],
    width: '100%',
  },
  container: {
    marginTop: '8%',
  },
  icon: {
    color: '#000000',
    composes: ['use-pointer', 'fs18', 'ml7', 'text-center'],
    width: 30,
  },
  tooltip: {
    borderRadius: 3,
    width: 120,
  },
});

const StepNameComponent = ({ index }) => {
  const classes = useStyles();
  const stepClasses = useStepStyles();
  const { draft, onStepChange } = useStep(index);
  const input = useRef(draft.name);

  const onClick = useCallback(
    evt => {
      evt.preventDefault();
      const name = input.current.value;
      onStepChange({ name });
    },
    [onStepChange]
  );

  return (
    <div className={classes.container} id="step-project">
      <div className={stepClasses.form}>
        <div className={stepClasses.field}>
          <label className={stepClasses.label} htmlFor="project.name">
            <span>Nom du projet</span>
          </label>
          <input
            ref={input}
            className={stepClasses.input}
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
