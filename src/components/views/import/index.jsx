import React, { useCallback, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { createLanguage } from '../../../redux/actions/translations';
import Steps from '../../commons/Steps';
import withLayout from '../../layout';
import Editor from './steps/editor';
import Finish from './steps/finish';
import Intro from './steps/intro';
import Select from './steps/select';
import useView from './useView';

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
  const { path, step, steps } = useView(lang, content);

  const clearState = () => {
    setContent(null);
    setLang(undefined);
  };

  const onIntroHandler = useCallback(() => {
    history.push(path);
  }, [history, path]);

  const onSelectHandler = useCallback(
    value => {
      history.push(path);
      setLang(value);
    },
    [history, path]
  );

  const onEditorHandler = useCallback(
    value => {
      history.push(path);
      setContent(value);
    },
    [history, path]
  );

  const onRestartHandler = useCallback(() => {
    history.push(path);
    clearState();
  }, [history, path]);

  const onSubmitHandler = useCallback(() => {
    dispatch(createLanguage(lang, content));
    history.push(path);
  }, [content, dispatch, history, lang, path]);

  return (
    <div className={classes.container} id="import-view">
      <div className={classes.inner}>
        <Steps current={step} steps={steps} />
        <div className={classes.wrapper}>
          <Switch>
            <Route exact path="/import/start">
              <Intro onClick={onIntroHandler} />
            </Route>
            <Route exact path="/import/select">
              <Select lang={lang} onChange={onSelectHandler} />
            </Route>
            <Route exact path="/import/editor">
              <Editor value={content} onClick={onEditorHandler} />
            </Route>
            <Route exact path="/import/finish">
              <Finish onRestart={onRestartHandler} onSubmit={onSubmitHandler} />
            </Route>
            <Redirect exact from="/import" push={false} to="/import/start" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default withLayout(ImportViewComponent);
