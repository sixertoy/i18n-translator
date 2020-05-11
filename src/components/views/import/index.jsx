import React, { useCallback, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { createLanguageAsync } from '../../../redux/actions';
import Steps from '../../commons/steps';
import withLayout from '../../layout';
import Step1 from './steps/step-1-project';
import Step2 from './steps/step-2-select';
import Step3 from './steps/step-3-editor';
import Step4 from './steps/step-4-finish';
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

const ImportViewComponent = () => {
  const [lang, setLang] = useState(undefined);
  const [content, setContent] = useState(null);

  const theme = useTheme();
  const classes = useStyles({ theme });
  const history = useHistory();
  const dispatch = useDispatch();
  const { next, project, step, steps } = useStep(lang, content);
  const pid = (project && project.id) || null;
  const pname = (project && project.name) || null;

  const onCreateHandler = useCallback(() => {
    history.push(next);
  }, [next, history]);

  const onSelectHandler = useCallback(
    value => {
      history.push(next);
      setLang(value);
    },
    [next, history]
  );

  const onEditorHandler = useCallback(
    value => {
      history.push(next);
      setContent(value);
    },
    [next, history]
  );

  const onRestartHandler = useCallback(() => {
    dispatch(createLanguageAsync({ content, lang, project: pid })).then(() => {
      setLang(undefined);
      setContent(null);
      history.push(`/import/${pid}/step/2`);
    });
  }, [lang, content, pid, dispatch, history]);

  const onSubmitHandler = useCallback(() => {
    dispatch(createLanguageAsync({ content, lang, project: pid })).then(() => {
      history.push(`/board/${pid}`);
    });
  }, [dispatch, lang, content, pid, history]);

  return (
    <div className={classes.container} id="import-view">
      <div className={classes.stepper}>
        <Steps current={step - 1} steps={steps} />
      </div>
      <Switch>
        <Route exact path="/import/:id/step/1">
          <Step1 name={pname} onClick={onCreateHandler} />
        </Route>
        <Route exact path="/import/:id/step/2">
          <Step2 lang={lang} onChange={onSelectHandler} />
        </Route>
        <Route exact path="/import/:id/step/3">
          <Step3 lang={lang} value={content} onSubmit={onEditorHandler} />
        </Route>
        <Route exact path="/import/:id/step/4">
          <Step4 onRestart={onRestartHandler} onSubmit={onSubmitHandler} />
        </Route>
        <Route path={['/import/:id', '/import/:id/step']}>
          <Redirect to={`/import/${pid}/step/1`} />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};

export default withLayout(ImportViewComponent);
