import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  description: {
    composes: ['is-light', 'fs24'],
    lineHeight: 1.4,
  },
  title: {
    composes: ['is-medium', 'mb12', 'fs48'],
    letterSpacing: 0.025,
    lineHeight: 1.05,
  },
  wrapper: {
    color: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100,
    maxWidth: 680,
    width: '80%',
  },
  [`@media (max-width: ${600}px)`]: {
    description: { fontSize: 18 },
    title: { fontSize: 32 },
  },
  [`@media (max-width: ${420}px)`]: {
    description: { fontSize: 16 },
    title: { fontSize: 28 },
    wrapper: { marginTop: '60px !important', width: '95% !important' },
  },
});

const ReactDumbComponent = React.memo(() => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>
        Gagnez du temps dans la gestion des traductions de vos applications.
      </h1>
      <p className={classes.description}>
        Typpo permet d&apos;éditer et d&apos;exporter simplement vos fichiers
        d&apos;internationalisation.
      </p>
    </div>
  );
});

export default ReactDumbComponent;
