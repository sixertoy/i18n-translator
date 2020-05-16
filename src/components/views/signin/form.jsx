import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// import { updateSubscribingEmail } from '../../../redux/actions';

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
    borderColor: '#ACE539',
    borderStyle: 'solid',
    borderWidth: 1,
    color: theme.colors.black,
    composes: ['is-block', 'rnd3', 'px7', 'py12', 'fs16'],
    width: '100%',
  }),
});

// function checkIfEmailIsValid(email) {
//   return (
//     email.current &&
//     typeof email.current === 'string' &&
//     email.current.trim() !== ''
//   );
// }

const SigninFormComponent = React.memo(({ mail }) => {
  const theme = useTheme();
  const emailInput = useRef(mail);
  const classes = useStyles({ theme });

  // const history = useHistory();
  // const dispatch = useDispatch();

  const onFormSubmit = useCallback(evt => {
    evt.preventDefault();
    // const email = emailInput.current.value;
    // const isvalid = checkIfEmailIsValid(email);
    // dispatch(updateSubscribingEmail(email));
    // const pathto = !isvalid ? '/signup' : `/signup?mail=${email}`;
    // history.push(pathto);
  }, []);

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <input
        ref={emailInput}
        className={classes.input}
        defaultValue={mail}
        name="landing.email"
        placeholder="e-mail"
        type="text"
      />
      <button className={classes.button} type="submit" onClick={() => {}}>
        <span>Continuer</span>
      </button>
    </form>
  );
});

SigninFormComponent.defaultProps = {
  mail: null,
};

SigninFormComponent.propTypes = {
  mail: PropTypes.string,
};

export default SigninFormComponent;
