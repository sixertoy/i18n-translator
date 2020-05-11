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

  const createHandler = useCallback(() => {
    history.push(next);
  }, [next, history]);

  const selectHandler = useCallback(
    value => {
      history.push(next);
      setLang(value);
    },
    [next, history]
  );

  const editorHandler = useCallback(
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

  const onSubmit = useCallback(() => {
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
          <Step1 name={pname} onClick={createHandler} />
        </Route>
        <Route exact path="/import/:id/step/2">
          <Step2 lang={lang} onChange={selectHandler} />
        </Route>
        <Route exact path="/import/:id/step/3">
          <Step3 lang={lang} value={content} onSubmit={editorHandler} />
        </Route>
        <Route exact path="/import/:id/step/4">
          <Step4 onRestart={onRestartHandler} onSubmit={onSubmit} />
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
