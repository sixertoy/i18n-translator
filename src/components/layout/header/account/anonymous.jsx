import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import GithubLogin from '../../../commons/buttons/github';
import GoogleLogin from '../../../commons/buttons/google';

const useStyles = createUseStyles({
  container: {
    composes: ['py12'],
  },
  splitter: {
    background: '#000000',
    border: 0,
    composes: ['my24', 'no-border'],
    height: 1,
    maxHeight: 1,
    minHeight: 1,
  },
  text: {
    composes: ['text-center'],
  },
  title: {
    composes: ['text-center', 'is-bold', 'mb7'],
  },
});

const AnonymousUserComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <h5 className={classes.title}>Incrivez-vous c&apos;est gratuit !</h5>
      <h6 className={classes.text}>
        Vous pourrez alors profiter de toutes les <b>fonctionnalités</b> que
        nous avons développé sur Typpo pour gèrer au mieux les traductions de
        vos projets
      </h6>
      <hr className={classes.splitter} />
      <GithubLogin useSignup />
      <GoogleLogin useSignup className="mt7" />
      <hr className={classes.splitter} />
    </div>
  );
});

export default AnonymousUserComponent;
