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
    composes: ['flex-rows', 'flex-start'],
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
        <ul>
          <li>
            <ProjectKeys />
          </li>
          <li>Edition/Check des props</li>
          <li>Choisir le language de référence</li>
          <li>
            <ProjectLanguages />
          </li>
          <li>
            <ProjectName />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withLayout(ImportViewComponent);
