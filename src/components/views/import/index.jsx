import React, { useCallback, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { rgba } from '../../../core/utils';
import { createLanguageAsync } from '../../../redux/actions';
import Steps from '../../commons/steps';
import withLayout from '../../layout';
import Step4 from './step-create';
import Step3 from './step-editor';
import Step1 from './step-project';
import Step2 from './step-select';
import useStep from './use-step';

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
    height: '100%',
    maxWidth: 800,
    width: '100%',
  },
});

const defaultState = { content: null, lang: undefined };
const steps = ['Commencer', 'Langue', 'Importer', 'Créer'];

const ImportViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { next, project, step } = useStep();
  const [draft, setDraft] = useState(defaultState);

  const history = useHistory();
  const dispatch = useDispatch();
  const onStepChange = useCallback(
    value => {
      if (value) setDraft(value);
      history.push(next);
    },
    [next, history]
  );

  const onSubmit = useCallback(
    pathto => {
      dispatch(createLanguageAsync({ ...draft, project })).then(() => {
        setDraft(defaultState);
        history.push(pathto);
      });
    },
    [dispatch, draft, project, history]
  );

  return (
    <div className={classes.container} id="import-view">
      <div className={classes.layer}>
        <div className={classes.wrapper}>
          <div className={classes.stepper}>
            <Steps current={step - 1} steps={steps} />
          </div>
          <Switch>
            <Route exact path="/import/:id/step/1">
              <Step1 onSubmit={onStepChange} />
            </Route>
            <Route exact path="/import/:id/step/2">
              <Step2 draft={draft} onSubmit={onStepChange} />
            </Route>
            <Route exact path="/import/:id/step/3">
              <Step3 draft={draft} onSubmit={onStepChange} />
            </Route>
            <Route exact path="/import/:id/step/4">
              <Step4 onSubmit={onSubmit} />
            </Route>
            <Route path="/import/:id/(.*)?">
              {/* NOTE Always redirect any import paths to starting step */}
              <Redirect to={`/import/${project}/step/1`} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default withLayout(ImportViewComponent);
