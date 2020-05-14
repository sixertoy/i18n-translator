import React, { useCallback, useEffect, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useParams,
} from 'react-router-dom';

import { rgba } from '../../../core/utils';
import { createLanguageAsync } from '../../../redux/actions';
import { selectProject } from '../../../redux/selectors';
import AuthRedirect from '../../commons/auth-redirect';
import Steps from '../../commons/steps';
import withLayout from '../../layout';
import Step4 from './step-create';
import Step3 from './step-editor';
import Step1 from './step-project';
import Step2 from './step-select';

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
  const { id, index } = useParams();
  const classes = useStyles({ theme });

  const [step, setStep] = useState(null);
  const [next, setNext] = useState(null);
  const [values, setValues] = useState(defaultState);
  const project = useSelector(_ => selectProject(_, id));

  const history = useHistory();
  const dispatch = useDispatch();
  const onStepChange = useCallback(
    value => {
      if (value) setValues(value);
      history.push(next);
    },
    [next, history]
  );

  const onSubmit = useCallback(
    pathto => {
      dispatch(createLanguageAsync({ ...values, project: id })).then(() => {
        setValues(defaultState);
        history.push(pathto);
      });
    },
    [dispatch, values, id, history]
  );

  useEffect(() => {
    const current = Number(index);
    setStep(current);
    setNext(`/import/${id}/step/${step + 1}`);
  }, [id, index, step]);

  return (
    <React.Fragment>
      {!project && <AuthRedirect />}
      {project && (
        <div className={classes.container} id="import-view">
          <div className={classes.layer}>
            <div className={classes.wrapper}>
              <div className={classes.stepper}>
                <Steps step={step} steps={steps} />
              </div>
              <Switch>
                <Route exact path="/import/:id/step/1">
                  <Step1 onSubmit={onStepChange} />
                </Route>
                <Route exact path="/import/:id/step/2">
                  <Step2 draft={values} onSubmit={onStepChange} />
                </Route>
                <Route exact path="/import/:id/step/3">
                  <Step3 draft={values} onSubmit={onStepChange} />
                </Route>
                <Route exact path="/import/:id/step/4">
                  <Step4 onSubmit={onSubmit} />
                </Route>
                <Route path="/import/:id/(.*)?">
                  {/* NOTE Always redirect any import paths to starting step */}
                  <Redirect to={`/import/${id}/step/1`} />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default withLayout(ImportViewComponent);
