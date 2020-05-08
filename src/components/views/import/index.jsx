import React, { useCallback, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { createLanguage } from '../../../redux/actions';
import Steps from '../../commons/steps';
import withLayout from '../../layout';
import Editor from './steps/editor';
import Finish from './steps/finish';
import Intro from './steps/intro';
import Select from './steps/select';
import useStep from './use-step';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    composes: ['p24'],
    height: '100%',
    paddingTop: theme.sizes.header,
  }),
  inner: {
    composes: ['p32'],
    height: '100%',
  },
  wrapper: ({ theme }) => ({
    composes: ['pt24', 'flex-1'],
    height: '100%',
    paddingBottom: theme.sizes.footer,
  }),
});

const ImportViewComponent = () => {
  const [lang, setLang] = useState(undefined);
  const [content, setContent] = useState(null);

  const theme = useTheme();
  const classes = useStyles({ theme });
  const history = useHistory();
  const dispatch = useDispatch();
  const { next, step, steps } = useStep(lang, content);

  const clearState = () => {
    setContent(null);
    setLang(undefined);
  };

  const onIntroHandler = useCallback(() => {
    history.push(next);
  }, [history, next]);

  const onSelectHandler = useCallback(
    value => {
      history.push(next);
      setLang(value);
    },
    [history, next]
  );

  const onEditorHandler = useCallback(
    value => {
      history.push(next);
      setContent(value);
    },
    [history, next]
  );

  const onRestartHandler = useCallback(() => {
    history.push(next);
    clearState();
  }, [history, next]);

  const onSubmitHandler = useCallback(() => {
    dispatch(createLanguage(lang, content));
    history.push('/board');
  }, [content, dispatch, history, lang]);

  return (
    <div className={classes.container} id="import-view">
      <div className={classes.inner}>
        <Steps current={step - 1} steps={steps} />
        <div className={classes.wrapper}>
          <Switch>
            <Route exact path="/import/1">
              <Intro onClick={onIntroHandler} />
            </Route>
            <Route exact path="/import/2">
              <Select lang={lang} onChange={onSelectHandler} />
            </Route>
            <Route exact path="/import/3">
              <Editor lang={lang} value={content} onClick={onEditorHandler} />
            </Route>
            <Route exact path="/import/4">
              <Finish onRestart={onRestartHandler} onSubmit={onSubmitHandler} />
            </Route>
            <Route path="*">
              <Redirect to="/import/1" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default withLayout(ImportViewComponent);
