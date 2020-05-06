import get from 'lodash.get';
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
// import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import Steps from '../../commons/Steps';
import withLayout from '../../layout';
import Editor from './steps/editor';
import Intro from './steps/intro';
import Select from './steps/select';

const useStyles = createUseStyles({
  button: {
    composes: ['flex-0'],
  },
  import: {
    composes: ['flex-rows', 'p24'],
    height: '100%',
  },
  select: {
    composes: ['flex-0'],
  },
  wrapper: {
    composes: ['is-relative', 'flex-1'],
  },
});

const CREATE_STEPS = [
  { label: 'Commencer', path: '/import/start' },
  { label: 'Langue', path: '/import/select' },
  { label: 'Importer', path: '/import/editor' },
];

const ImportViewComponent = () => {
  const classes = useStyles();
  const history = useHistory();

  const [step, setStep] = useState(0);
  const [lang, setLang] = useState(undefined);

  useEffect(() => {
    const path = get(CREATE_STEPS, `${step}.path`);
    history.push(path);
  }, [history, step]);

  return (
    <div className={classes.import}>
      <Steps current={step} steps={CREATE_STEPS} />
      <Switch>
        <Route exact path="/import/start">
          <Intro onClick={() => setStep(step + 1)} />
        </Route>
        <Route exact path="/import/select">
          <Select
            lang={lang}
            onChange={value => {
              setLang(value);
              setStep(step + 1);
            }}
          />
        </Route>
        <Route exact path="/import/editor">
          <Editor value="" onChange={() => {}} />
        </Route>
        <Redirect exact from="/import" push={false} to="/import/start" />
      </Switch>
    </div>
  );
};

export default withLayout(ImportViewComponent);
