import React, { useCallback, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { createLanguageAsync } from '../../../redux/actions';
import Steps from '../../commons/steps';
import withLayout from '../../layout';
import Step4 from './step-create';
import Step3 from './step-editor';
import Step1 from './step-project';
import Step2 from './step-select';
import useStep from './use-step';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows'],
    height: '100%',
    margin: '48px auto 32px auto',
    width: 800,
  },
  stepper: {
    margin: '24px auto',
    width: '80%',
  },
});

const defaultState = { content: null, lang: undefined };
const steps = ['Commencer', 'Langue', 'Importer', 'Créer'];

const ImportViewComponent = () => {
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });
  const { next, project, step } = useStep();
  const [draft, setDraft] = useState(defaultState);

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
  );
};

export default withLayout(ImportViewComponent);
