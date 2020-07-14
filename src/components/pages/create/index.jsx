import React from 'react';
import { createUseStyles } from 'react-jss';

import withLayout from '../../layout';
import ProjectKeys from './steps/project-keys';
import ProjectLanguages from './steps/project-languages';
import ProjectName from './steps/project-name';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-1'],
  },
  layer: {
    composes: ['flex-rows', 'items-center'],
    height: '100%',
    paddingBottom: 32,
    paddingTop: 48,
  },
  stepper: {
    margin: '0 auto',
    width: '80%',
  },
  wrapper: {
    composes: ['flex-rows', 'flex-start', 'py24', 'pl24', 'pr12'],
    height: '100%',
    margin: '0 auto',
    maxWidth: 960,
    padding: 24,
    width: '100%',
  },
});

const ImportViewComponent = () => {
  const classes = useStyles();
  // const name = ucFirst(getName());
  // const draft = { name };
  // const onSubmit = useCallback(() => {}, []);
  return (
    <div className={classes.container} id="create-view">
      <div className={classes.wrapper}>
        <ProjectName />
        <ProjectLanguages />
        <ProjectKeys />
        <section>Choisir le language de référence</section>
      </div>
    </div>
  );
};

export default withLayout(ImportViewComponent);
