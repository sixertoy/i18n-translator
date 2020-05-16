import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { updateMail } from '../../../redux/actions';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '&:hover': { textDecoration: 'none' },
    background: theme.colors.active,
    color: theme.colors.white,
    composes: ['is-inline-block', 'px32', 'py15', 'fs20', 'rnd3', 'is-normal'],
    lineHeight: 1.3,
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

function checkIfEmailIsValid(email) {
  return (
    email.current &&
    typeof email.current === 'string' &&
    email.current.trim() !== ''
  );
}

const LandingFormComponent = React.memo(({ mail }) => {
  const theme = useTheme();
  const email = useRef(mail);
  const classes = useStyles({ theme });

  const history = useHistory();
  const dispatch = useDispatch();

  const onInputChange = useCallback(evt => {
    evt.preventDefault();
    email.current = evt.target.value;
  }, []);

  const onFormSubmit = useCallback(
    evt => {
      evt.preventDefault();
      const isvalid = checkIfEmailIsValid(email);
      dispatch(updateMail(email.current));
      const pathto = !isvalid ? '/signup' : `/signup?mail=${email.current}`;
      history.push(pathto);
    },
    [dispatch, history]
  );

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <input
        className={classes.input}
        defaultValue={email.current}
        name="landing.email"
        placeholder="e-mail"
        type="text"
        onChange={onInputChange}
      />
      <button className={classes.button} type="submit">
        <span>Inscrivez-vous,</span>
        <i> c&apos;est gratuit !</i>
      </button>
    </form>
  );
});

LandingFormComponent.defaultProps = {
  mail: null,
};

LandingFormComponent.propTypes = {
  mail: PropTypes.string,
};

export default LandingFormComponent;
