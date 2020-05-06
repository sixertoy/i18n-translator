import get from 'lodash.get';
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';

import { createLanguage } from '../../../redux/actions/translations';
import Steps from '../../commons/Steps';
import withLayout from '../../layout';
import Editor from './steps/editor';
import Finish from './steps/finish';
import Intro from './steps/intro';
import Select from './steps/select';

const useStyles = createUseStyles({
  import: {
    composes: ['flex-rows', 'p24'],
    height: '100%',
  },
  wrapper: {
    composes: ['mt24', 'flex-rows', 'flex-center', 'items-center'],
  },
});

const CREATE_STEPS = [
  { label: 'Commencer', path: '/import/start' },
  { label: 'Langue', path: '/import/select' },
  { label: 'Importer', path: '/import/editor' },
  { label: 'Finish', path: '/import/finish' },
];

function getPathByStepIndex(index) {
  const path = get(CREATE_STEPS, `${index}.path`);
  return path;
}

function getStepIndexByPath(location) {
  const { pathname } = location;
  const index = CREATE_STEPS.findIndex(({ path }) => path === pathname);
  return index;
}

const ImportViewComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [step, setStep] = useState(0);
  const [lang, setLang] = useState(undefined);
  const [content, setContent] = useState(null);

  const clearState = () => {
    setContent(null);
    setLang(undefined);
  };

  useEffect(() => {
    const index = getStepIndexByPath(location);
    if (index !== step) setStep(index);
    if (lang && content) dispatch(createLanguage(lang, content));
  }, [content, dispatch, history, lang, location, step]);

  return (
    <div className={classes.import}>
      <Steps current={step} steps={CREATE_STEPS} />
      <div className={classes.wrapper}>
        <Switch>
          <Redirect exact from="/import" push={false} to="/import/start" />
          <Route exact path="/import/start">
            <Intro
              onClick={() => {
                const path = getPathByStepIndex(1);
                history.push(path);
              }}
            />
          </Route>
          <Route exact path="/import/select">
            <Select
              lang={lang}
              onChange={value => {
                const path = getPathByStepIndex(2);
                history.push(path);
                setLang(value);
              }}
            />
          </Route>
          <Route exact path="/import/editor">
            <Editor
              value={content}
              onSubmit={value => {
                const path = getPathByStepIndex(3);
                history.push(path);
                setContent(value);
              }}
            />
          </Route>
          <Route exact path="/import/finish">
            <Finish
              onRestart={() => {
                const path = getPathByStepIndex(1);
                history.push(path);
                clearState();
              }}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default withLayout(ImportViewComponent);
