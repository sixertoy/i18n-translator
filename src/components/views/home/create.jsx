import React, { useCallback } from 'react';
import { AiOutlineProject as ProjectsIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createProjectAsync } from '../../../redux/actions';

const useStyles = createUseStyles({
  button: {
    background: '#000000',
    borderRadius: 4,
    color: '#FFFFFF',
    composes: ['is-block', 'px24', 'py12', 'fs18', 'text-center'],
    width: 250,
  },
  icon: {
    composes: ['mr12'],
  },
  splitter: {
    composes: ['is-block', 'my24', 'text-center', 'fs18'],
  },
});

const CreateComponent = React.memo(() => {
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });

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
      <button className={classes.button} type="button" onClick={onDemoClick}>
        <ProjectsIcon className={classes.icon} />
        <span>Créer un projet</span>
      </button>
    </React.Fragment>
  );
});

export default CreateComponent;
