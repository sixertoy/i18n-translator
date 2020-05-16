import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  description: {
    composes: ['fs24', 'is-light'],
    lineHeight: 1.4,
  },
  title: {
    composes: ['is-medium', 'mb12', 'fs48'],
    letterSpacing: 0.025,
    lineHeight: 1.05,
  },
});

const ReactDumbComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <React.Fragment>
      <h1 className={classes.title}>
        Avec Typpo, vous gagnez du temps dans la gestion de vos traductions pour
        vos applications.
      </h1>
      <p className={classes.description}>
        Typpo permet d&apos;éditer, de dupliquer, d&apos;orchestrer, et
        d&apos;exporter en un clin d&apos;oeil vos fichiers
        d&apos;internationalisation pour tous vos projets.
      </p>
    </React.Fragment>
  );
});

export default ReactDumbComponent;
