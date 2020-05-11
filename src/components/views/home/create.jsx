import React, { useCallback } from 'react';
import { AiOutlineProject as ProjectsIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createProjectAsync } from '../../../redux/actions';
import Button from '../../commons/button';

const useStyles = createUseStyles({
  icon: {
    composes: ['mr12'],
  },
  splitter: {
    composes: ['is-block', 'my24', 'text-center', 'fs18'],
  },
});

const CreateComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const history = useHistory();
  const dispatch = useDispatch();
  const onDemoClick = useCallback(() => {
    dispatch(createProjectAsync()).then(id => {
      history.push(`/import/${id}/step/1`);
    });
  }, [dispatch, history]);

  return (
    <React.Fragment>
      <span className={classes.splitter}>
        <span>-&nbsp;ou&nbsp;-</span>
      </span>
      <Button onClick={onDemoClick}>
        <ProjectsIcon className={classes.icon} />
        <span>Créer un projet</span>
      </Button>
    </React.Fragment>
  );
});

export default CreateComponent;
