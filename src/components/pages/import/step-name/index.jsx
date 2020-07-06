import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { AiFillLock as LockIcon } from 'react-icons/ai';
import { IoIosArrowRoundForward as ArrowIcon } from 'react-icons/io';
import { createUseStyles } from 'react-jss';

import Tooltip from '../../../commons/tooltip';
import useStep from '../use-step';

const useStyles = createUseStyles({
  container: {
    margin: '0 auto',
    marginTop: '8%',
    width: '80%',
  },
  field: {
    borderColor: '#000000',
    borderRadius: 7,
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
  },
  form: {
    margin: '0 auto',
    width: 350,
  },
  icon: {
    color: '#000000',
    composes: ['use-pointer', 'fs18', 'ml7', 'text-center'],
    width: 30,
  },
  input: {
    // TODO add disabled state
    '&:disabled': { opacity: 0.65 },
    composes: ['fs24', 'is-bold', 'flex-1'],
  },
  label: {
    background: 'transparent',
    composes: ['is-absolute', 'is-bold', 'p5'],
    left: 12,
    top: -12,
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
      <div className={classes.form}>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="project.name">
            <span>Nom du projet</span>
          </label>
          <input
            ref={input}
            className={classes.input}
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
