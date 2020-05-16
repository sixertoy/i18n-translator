import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '&:hover': { textDecoration: 'none' },
    background: theme.colors.active,
    color: theme.colors.white,
    composes: ['is-inline-block', 'p15', 'fs24', 'rnd3', 'is-normal'],
    lineHeight: 1.1,
  }),
  form: {
    composes: ['flex-columns', 'flex-start', 'items-center'],
  },

  input: ({ theme }) => ({
    background: theme.colors.white,
    composes: ['p15', 'fs24', 'rnd3', 'mr7'],
    width: 400,
  }),
});

const LandingFormComponent = React.memo(() => {
  const theme = useTheme();
  const pathto = useRef('/signup');
  const classes = useStyles({ theme });
  const [email, setEmail] = useState('');

  const onInputChange = useCallback(evt => {
    evt.preventDefault();
    setEmail(evt.target.value);
  }, []);

  useEffect(() => {
    const hasemail = email && typeof email === 'string' && email.trim() !== '';
    pathto.current = hasemail ? '/signup' : `/signup?mail=${email}`;
  });

  return (
    <div className={classes.form}>
      <input
        className={classes.input}
        name="landing.email"
        placeholder="e-mail"
        type="text"
        onChange={onInputChange}
      />
      <Link className={classes.button} to={pathto.current}>
        <span>
          <span>Inscrivez-vous</span>
          <i> c&apos;est gratuit</i>
        </span>
      </Link>
    </div>
  );
});

LandingFormComponent.defaultProps = {};

LandingFormComponent.propTypes = {};

export default LandingFormComponent;
