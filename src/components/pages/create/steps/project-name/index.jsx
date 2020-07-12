import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    paddingTop: 30,
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
  input: {
    // TODO add disabled state
    '&:disabled': { opacity: 0.65 },
    composes: ['fs24', 'is-bold', 'flex-1', 'text-center'],
  },
  label: {
    background: 'transparent',
    composes: ['is-absolute', 'is-bold', 'p5'],
    left: 12,
    top: -30,
  },
});

const CreateProjectNameComponent = React.memo(({ initial }) => {
  const classes = useStyles();
  const changeHandler = useCallback(() => {}, []);
  return (
    <div className={classes.container}>
      <label className={classes.field}>
        <div className={classes.label}>
          <span>Nom du projet</span>
        </div>
        <input
          className={classes.input}
          defaultValue={initial}
          name="name"
          type="text"
          onChange={changeHandler}
        />
      </label>
    </div>
  );
});

CreateProjectNameComponent.defaultProps = {
  initial: ucFirst(getName()),
};

CreateProjectNameComponent.propTypes = {
  initial: PropTypes.string,
};

export default CreateProjectNameComponent;
