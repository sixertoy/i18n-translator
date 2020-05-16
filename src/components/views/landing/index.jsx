import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { selectMail } from '../../../redux/selectors';
import Form from './form';
import Nav from './nav';

const useStyles = createUseStyles({
  bottom: {
    margin: '0 auto',
    marginTop: 24,
    width: 800,
  },
  container: ({ theme }) => ({
    background: theme.app.landing,
    composes: ['ff-roboto', 'p16'],
    height: '100%',
    minHeight: 650,
  }),
  description: {
    composes: ['fs24', 'is-light'],
    lineHeight: 1.4,
  },
  left: {
    width: 600,
  },
  right: {
    composes: ['flex-columns', 'flex-start', 'items-center'],
  },
  title: {
    composes: ['is-medium', 'mb12', 'fs48'],
    letterSpacing: 0.025,
    lineHeight: 1.05,
  },
  wrapper: ({ theme }) => ({
    color: theme.colors.white,
    composes: ['flex-columns', 'flex-center', 'items-start'],
    margin: '0 auto',
    width: 800,
  }),
});

const LandingViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const mail = useSelector(selectMail);

  return (
    <React.Fragment>
      <IfFirebaseAuthed>{() => <Redirect to="/home" />}</IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        {() => (
          <div className={classes.container} id="landing-view">
            <Nav />
            <div className={classes.wrapper}>
              <div className={classes.left}>
                <h1 className={classes.title}>
                  Avec Typpo, vous gagnez du temps dans la gestion de vos
                  traductions pour vos applications.
                </h1>
                <p className={classes.description}>
                  Typpo permet d&apos;éditer, de dupliquer, d&apos;orchestrer,
                  et d&apos;exporter en un clin d&apos;oeil vos fichiers
                  d&apos;internationalisation pour tous vos projets.
                </p>
              </div>
              <div className={classes.right} />
            </div>
            <div className={classes.bottom}>
              <Form mail={mail} />
              <Link to="/">
                <span>Continuer sans s&apos;inscrire</span>
              </Link>
            </div>
          </div>
        )}
      </IfFirebaseUnAuthed>
    </React.Fragment>
  );
});

export default LandingViewComponent;
