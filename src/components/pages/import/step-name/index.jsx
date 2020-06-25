import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { AiFillLock as LockIcon } from 'react-icons/ai';
import { IoIosArrowRoundForward as ArrowIcon } from 'react-icons/io';
import { createUseStyles } from 'react-jss';

import Tooltip from '../../../commons/tooltip';
import useStepStyles from '../styles';
import useStep from '../use-step';

const useStyles = createUseStyles({
  container: {
    margin: '0 auto',
    marginTop: '8%',
    width: '80%',
  },
  icon: {
    color: '#000000',
    composes: ['use-pointer', 'fs18', 'ml7', 'text-center'],
    width: 30,
  },
  submit: {
    background: '#F2F2F2',
    border: '1px solid #DFDFE0',
    borderRadius: 35,
    color: '#919191',
    composes: ['mt12'],
    fontSize: '3em',
    height: 70,
    width: 70,
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
            FAFBFC
            className={stepClasses.input}
            defaultValue={input.current}
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
        <button className={classes.submit} type="button" onClick={onClick}>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

StepNameComponent.propTypes = {
  index: PropTypes.number.isRequired,
};

export default StepNameComponent;
