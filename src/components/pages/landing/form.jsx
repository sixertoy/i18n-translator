import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { updateSubscribingEmail } from '../../../redux/actions';

const useStyles = createUseStyles({
  button: {
    '&:hover': { textDecoration: 'none' },
    background: '#000000',
    color: '#FFFFFF',
    composes: ['is-light', 'py15', 'px24', 'fs24', 'rnd3', 'flex-0'],
    whiteSpace: 'nowrap',
  },
  container: {
    composes: ['flex-columns', 'flex-start', 'items-center'],
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 680,
    paddingTop: 24,
    width: '80%',
  },
  input: {
    '&::placeholder': { opacity: 0.25 },
    background: '#FFFFFF',
    composes: ['p15', 'fs24', 'rnd3', 'text-overflow', 'no-border'],
    width: '100%',
  },
  wrapper: {
    composes: ['flex-1', 'no-overflow', 'mr3'],
  },
  [`@media (max-width: ${780}px)`]: {
    button: { fontSize: '1.2rem' },
    input: { fontSize: '1.2rem' },
  },
  [`@media (max-width: ${680}px)`]: {
    button: { fontSize: '1rem' },
    input: { fontSize: '1rem' },
  },
  [`@media (max-width: ${600}px)`]: {
    container: { paddingTop: 32 },
  },
  [`@media (max-width: ${580}px)`]: {
    button: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      paddingBottom: 32,
      paddingTop: 32,
      width: '100%',
    },
    container: { flexDirection: 'column', paddingTop: 32 },
    input: { display: 'none', visibility: 'hidden' },
    wrapper: { marginRight: 0, width: '100%' },
  },
  [`@media (max-width: ${420}px)`]: {
    container: { paddingTop: 48, width: '95% !important' },
  },
  [`@media (max-width: ${380}px)`]: {
    button: { fontSize: '1.1rem' },
  },
});

const LandingFormComponent = React.memo(({ email }) => {
  const history = useHistory();
  const classes = useStyles();

  const emailInput = useRef(email);
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

  useEffect(() => {
    if (submitted) history.push('/signup');
  }, [history, submitted]);

  return (
    <form onSubmit={onFormSubmit}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <input
            ref={emailInput}
            autoComplete="email"
            className={classes.input}
            defaultValue={email}
            name="email"
            placeholder="email"
            type="text"
          />
        </div>
        <button className={classes.button} type="submit">
          <span>Inscrivez-vous,</span>
          <i> c&apos;est gratuit !</i>
        </button>
      </div>
    </form>
  );
});

LandingFormComponent.defaultProps = {
  email: null,
};

LandingFormComponent.propTypes = {
  email: PropTypes.string,
};

export default LandingFormComponent;
