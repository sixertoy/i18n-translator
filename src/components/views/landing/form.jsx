import PropTypes from 'prop-types';
import React, { useCallback, useRef, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { updateSubscribingEmail } from '../../../redux/actions';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '&:hover': { textDecoration: 'none' },
    background: theme.colors.active,
    color: theme.colors.white,
    composes: ['is-inline-block', 'px24', 'py15', 'fs20', 'rnd3'],
    lineHeight: 1.3,
    width: 320,
  }),
  form: {
    composes: ['flex-columns', 'flex-start', 'items-center'],
  },
  input: ({ theme }) => ({
    '&::placeholder': { opacity: 0.25 },
    background: theme.colors.white,
    composes: ['p15', 'fs24', 'rnd3', 'mr7'],
    width: 400,
  }),
});

const LandingFormComponent = React.memo(({ email }) => {
  const theme = useTheme();
  const emailInput = useRef(email);
  const classes = useStyles({ theme });
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const onFormSubmit = useCallback(
    evt => {
      evt.preventDefault();
      const { value } = emailInput.current;
      dispatch(updateSubscribingEmail(value));
      setSubmitted(true);
    },
    [dispatch]
  );

  return (
    <React.Fragment>
      {submitted && <Redirect to={{ pathname: '/signup' }} />}
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
          <span>Inscrivez-vous,</span>
          <i> c&apos;est gratuit !</i>
        </button>
      </form>
    </React.Fragment>
  );
});

LandingFormComponent.defaultProps = {
  email: null,
};

LandingFormComponent.propTypes = {
  email: PropTypes.string,
};

export default LandingFormComponent;
