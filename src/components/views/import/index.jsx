import React, { useCallback, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { createLanguageAsync } from '../../../redux/actions';
import Steps from '../../commons/steps';
import { useStep } from '../../hooks';
import withLayout from '../../layout';
import Step4 from './step-create';
import Step3 from './step-editor';
import Step1 from './step-project';
import Step2 from './step-select';

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
  const [draft, setDraft] = useState({});

  const theme = useTheme();
  const classes = useStyles({ theme });
  const history = useHistory();
  const dispatch = useDispatch();
  const { next, project, step, steps } = useStep(draft);
  const pid = (project && project.id) || null;

  const createHandler = useCallback(() => {
    history.push(next);
  }, [next, history]);

  const selectHandler = useCallback(
    lang => {
      history.push(next);
      setDraft({ ...draft, lang });
    },
    [next, draft, history]
  );

  const editorHandler = useCallback(
    content => {
      history.push(next);
      setDraft({ ...draft, content });
    },
    [next, draft, history]
  );

  const onSubmit = useCallback(
    addLanguage => {
      dispatch(createLanguageAsync({ ...draft, project: pid })).then(() => {
        setDraft({});
        const pathto = addLanguage ? `/import/${pid}/step/2` : `/board/${pid}`;
        history.push(pathto);
      });
    },
    [dispatch, draft, pid, history]
  );

  return (
    <div className={classes.container} id="import-view">
      <div className={classes.stepper}>
        <Steps current={step - 1} steps={steps} />
      </div>
      <Switch>
        <Route exact path="/import/:id/step/1">
          <Step1 onSubmit={createHandler} />
        </Route>
        <Route exact path="/import/:id/step/2">
          <Step2 lang={draft.lang} onSubmit={selectHandler} />
        </Route>
        <Route exact path="/import/:id/step/3">
          <Step3
            lang={draft.lang}
            value={draft.content}
            onSubmit={editorHandler}
          />
        </Route>
        <Route exact path="/import/:id/step/4">
          <Step4 onSubmit={onSubmit} />
        </Route>
        <Route path="/import/:id/(.*)?">
          <Redirect to={`/import/${pid}/step/1`} />
        </Route>
      </Switch>
    </div>
  );
};

export default withLayout(ImportViewComponent);
