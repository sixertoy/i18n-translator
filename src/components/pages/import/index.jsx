import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';

import { rgba } from '../../../core/utils';
import withLayout from '../../layout';
import StepCommit from './step-commit';
import StepContent from './step-content';
import StepLang from './step-lang';
import StepName from './step-name';
import Stepper from './stepper';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.app.container,
    composes: ['flex-1'],
  }),
  layer: ({ theme }) => ({
    background: rgba(theme.app.layer, 0.95),
    composes: ['flex-rows', 'items-center'],
    height: '100%',
    paddingBottom: 32,
    paddingTop: 48,
  }),
  stepper: {
    margin: '0 auto',
    width: '80%',
  },
  wrapper: {
    composes: ['flex-rows', 'flex-start'],
    height: '100%',
    maxWidth: 800,
    width: '100%',
  },
});

const steps = [
  { Component: StepName, key: 'name', label: 'Commencer' },
  { Component: StepLang, key: 'lang', label: 'Langue' },
  { Component: StepContent, label: 'Importer' },
  { Component: StepCommit, label: 'Créer' },
];

const ImportViewComponent = () => {
  const theme = useTheme();
  const { index } = useParams();
  const classes = useStyles({ theme });
  const current = Number(index);

  return (
    <React.Fragment>
      <div className={classes.container} id="import-view">
        <div className={classes.layer}>
          <div className={classes.wrapper}>
            <div className={classes.stepper}>
              <Stepper step={current} steps={steps} />
            </div>
            <Switch>
              {steps.map((obj, ind) => {
                const next = ind + 1;
                const path = `/import/:id/step/${next}`;
                return (
                  <Route key={path} exact path={path}>
                    <obj.Component index={next} />
                  </Route>
                );
              })}
              <Route path="/import/:id/(.*)?">
                <Redirect to="/home" />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withLayout(ImportViewComponent);
