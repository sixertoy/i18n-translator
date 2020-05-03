import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { rgba } from '../../../core/utils/colors';
import { updateValue } from '../../../redux/actions/translations';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    // borderRadius: 4,
    borderBottom: `1px solid ${theme.colors.white}`,
    composes: ['mb18'],
  }),
  input: ({ theme }) => ({
    '&:focus': {
      background: rgba(theme.colors.white, 1),
    },
    background: rgba(theme.colors.white, 0.25),
    composes: [
      'is-block',
      'px7',
      'py12',
      'no-overflow',
      'fs14',
      'no-wrap',
      'is-full-width',
    ],
    fontFamily: ['arial', 'verdana', 'sans-serif'],
    letterSpacing: '0.05rem',
    textOverflow: 'ellipsis',
    transition: 'background 0.5s',
  }),
  nobackground: {
    '& $input': {
      background: 'none !important',
    },
  },
});

const InputComponent = ({ id, lang, primary, value }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });
  return (
    <div
      className={classnames(classes.container, {
        [classes.nobackground]: primary,
      })}>
      <input
        className={classes.input}
        defaultValue={value}
        type="text"
        onBlur={evt => {
          evt.preventDefault();
          const udpate = evt.target.value;
          dispatch(updateValue({ id, lang, udpate }));
        }}
      />
    </div>
  );
};

InputComponent.defaultProps = {
  primary: false,
};

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export default InputComponent;
