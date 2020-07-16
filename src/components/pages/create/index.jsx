import React from 'react';
import { createUseStyles } from 'react-jss';

import withLayout from '../../layout';
import ProjectLanguages from './project-languages';
import ProjectName from './project-name';

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
  return (
    <div className={classes.container} id="create-view">
      <div className={classes.wrapper}>
        <ProjectName />
        <ProjectLanguages />
      </div>
    </div>
  );
};

export default withLayout(ImportViewComponent);
