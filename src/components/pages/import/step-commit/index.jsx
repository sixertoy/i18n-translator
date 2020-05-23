import React, { useCallback } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Button from '../../../commons/button';
import useStep from '../use-step';

const useStyles = createUseStyles({
  container: {
    marginTop: '8%',
  },
  inner: {
    composes: ['flex-columns', 'flex-center'],
  },
  splitter: {
    composes: ['is-block', 'py12', 'text-center', 'mx7'],
  },
});

const StepCommitComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { draft, onCommitDraft } = useStep();

  const onSubmitHandler = useCallback(
    evt => {
      evt.preventDefault();
      onCommitDraft();
    },
    [onCommitDraft]
  );

  return (
    <div className={classes.container} id="step-create">
      <div className={classes.inner}>
        <div>
          <p>{draft.name}</p>
          <p>{draft.lang}</p>
        </div>
        <Button onClick={onSubmitHandler}>
          <span>Ajouter</span>
        </Button>
      </div>
    </div>
  );
};

export default StepCommitComponent;
