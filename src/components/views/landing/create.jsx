import React, { useCallback } from 'react';
import { AiOutlineProject as ProjectsIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createProjectAsync, updateDemo } from '../../../redux/actions';
import Button from '../../commons/button';

const useStyles = createUseStyles({
  icon: {
    composes: ['mr12'],
  },
});

const CreateComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const history = useHistory();
  const dispatch = useDispatch();
  const onDemoClick = useCallback(() => {
    dispatch(updateDemo(true));
    dispatch(createProjectAsync()).then(() => {
      history.push(`/import/demo/step/1`);
    });
  }, [dispatch, history]);

  return (
    <Button onClick={onDemoClick}>
      <ProjectsIcon className={classes.icon} />
      <span>Créer un projet</span>
    </Button>
  );
});

export default CreateComponent;
