import firebase from 'firebase/app';
import isEmpty from 'lodash.isempty';
import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

// import { useHistory } from 'react-router-dom';
import { updateSubscribingEmail } from '../../../redux/actions';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    background: theme.colors.black,
    color: theme.colors.white,
    composes: ['is-block', 'rnd3', 'px7', 'py12', 'fs16', 'mt7'],
    width: '100%',
  }),
  form: {},
  input: ({ theme }) => ({
    '&::placeholder': { opacity: 0.25 },
    borderColor: theme.colors.black,
    borderStyle: 'solid',
    borderWidth: 1,
    color: theme.colors.black,
    composes: ['is-block', 'rnd3', 'px7', 'py12', 'fs16'],
    width: '100%',
  }),
});

function checkIfEmailIsValid(value) {
  return value && typeof value === 'string' && !isEmpty(value.trim());
}

const SigninFormComponent = React.memo(({ email }) => {
  const emailInput = useRef(email);
  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useDispatch();

  const onFormSubmit = useCallback(
    evt => {
      evt.preventDefault();
      const { value } = emailInput.current;
      const isvalid = checkIfEmailIsValid(value);
      if (!isvalid) {
        toast.error('Please provide any valid email');
        return;
      }
      firebase
        .auth()
        .sendSignInLinkToEmail(value, {
          handleCodeInApp: true,
          url: 'https://typpo.space',
        })
        .then(() => {
          toast.success('ok');
          // dispatch temporary item
          dispatch(updateSubscribingEmail());
        })
        .catch(({ message }) => {
          toast.error(message);
        });
    },
    [dispatch]
  );

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <input
        ref={emailInput}
        className={classes.input}
        defaultValue={email}
        name="landing.email"
        placeholder="e-mail"
        type="email"
      />
      <button className={classes.button} type="submit">
        <span>Continuer</span>
      </button>
    </form>
  );
});

SigninFormComponent.defaultProps = {
  email: null,
};

SigninFormComponent.propTypes = {
  email: PropTypes.string,
};

export default SigninFormComponent;