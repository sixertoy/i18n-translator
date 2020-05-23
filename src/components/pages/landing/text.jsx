import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  description: {
    composes: ['is-light'],
    fontSize: 24,
    lineHeight: 1.4,
  },
  title: {
    composes: ['is-medium', 'mb12'],
    fontSize: 48,
    letterSpacing: 0.025,
    lineHeight: 1.05,
  },
  wrapper: ({ theme }) => ({
    color: theme.colors.white,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100,
    maxWidth: 680,
    width: '80%',
  }),
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
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>
        Avec Typpo, vous gagnez du temps dans la gestion des traductions de vos
        applications.
      </h1>
      <p className={classes.description}>
        Typpo permet d&apos;éditer, de dupliquer, d&apos;orchestrer, et
        d&apos;exporter en un clin d&apos;oeil vos fichiers
        d&apos;internationalisation pour tous vos projets.
      </p>
    </div>
  );
});

export default ReactDumbComponent;