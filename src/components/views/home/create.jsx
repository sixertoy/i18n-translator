import React, { useCallback } from 'react';
import { AiOutlineProject as ProjectsIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { createProject } from '../../../redux/actions';

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

const ReactDumbComponent = React.memo(() => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });

  const onDemoClick = useCallback(() => {
    dispatch(createProject());
  }, [dispatch]);

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

ReactDumbComponent.defaultProps = {};

ReactDumbComponent.propTypes = {};

export default ReactDumbComponent;
