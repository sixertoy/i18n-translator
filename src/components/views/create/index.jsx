import get from 'lodash.get';
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';

import Steps from '../../commons/Steps';
// import { DEFAULT_LANG } from '../../../constants';
// import { createLanguage } from '../../../redux/actions/translations';
// import { selectPrimaryKeys } from '../../../redux/selectors';
// import Button from '../../commons/button';
import withLayout from '../../layout';
import Editor from './steps/editor';
import Intro from './steps/intro';
import Select from './steps/select';

const useStyles = createUseStyles({
  button: {
    composes: ['flex-0'],
  },
  create: {
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
  { label: 'Commencer', path: '/create' },
  { label: 'Langue', path: '/create/select' },
  { label: 'Importer', path: '/create/editor' },
];

const CreateViewComponent = () => {
  const classes = useStyles();
  const history = useHistory();

  const [step, setStep] = useState(0);
  const [lang, setLang] = useState(undefined);

  useEffect(() => {
    const path = get(CREATE_STEPS, `${step}.path`);
    history.push(path);
  }, [history, step]);
  return (
    <div className={classes.create}>
      <Steps current={step} steps={CREATE_STEPS} />
      <Switch>
        <Route exact path="/create">
          <Intro
            onClick={() => {
              setStep(step + 1);
            }}
          />
        </Route>
        <Route exact path="/create/select">
          <Select
            lang={lang}
            onChange={value => {
              setLang(value);
              setStep(step + 1);
            }}
          />
        </Route>
        <Route exact path="/create/editor">
          <Editor value="" onChange={() => {}} />
        </Route>
      </Switch>
    </div>
  );
};

export default withLayout(CreateViewComponent);
