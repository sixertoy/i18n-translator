import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { EVENT_TYPES } from '../../../constants';

const useStyles = createUseStyles({
  container: {
    '& + &': {
      marginTop: 12,
    },
    background: '#FFFFFF',
    borderRadius: 4,
  },
  input: {
    composes: ['is-block', 'px7', 'py3', 'no-overflow'],
    fontSize: 14,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },
});

const InputComponent = ({ lang, value }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        defaultValue={value}
        type="text"
        onBlur={evt => {
          evt.preventDefault();
          const translation = evt.target.value;
          dispatch({ lang, translation, type: EVENT_TYPES });
        }}
      />
    </div>
  );
};

InputComponent.defaultProps = {};

InputComponent.propTypes = {
  lang: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputComponent;
