import React, { useRef } from 'react';
import { createUseStyles } from 'react-jss';
import { useLocation } from 'react-router-dom';

const useStyles = createUseStyles({
  title: {
    composes: ['is-bold', 'fs16', 'mb24'],
  },
});

const TitleComponent = React.memo(() => {
  const label = useRef('');
  const classes = useStyles();
  const { pathname } = useLocation();
  const useSignup = pathname === '/signup';

  label.current = useSignup
    ? 'Créez votre compte'
    : 'Connectez-vous à votre compte';

  return (
    <h1 className={classes.title}>
      <span>{label.current}</span>
    </h1>
  );
});

export default TitleComponent;
