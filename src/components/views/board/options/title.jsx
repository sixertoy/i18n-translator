import React, { useCallback } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { updateProjectName } from '../../../../redux/actions';
import { selectPercentages, selectProject } from '../../../../redux/selectors';
import PercentageBar from '../../../commons/percentage-bar';

const useStyles = createUseStyles({
  infos: {
    composes: ['flex-1'],
  },
  input: ({ theme }) => ({
    '&:focus': {
      background: '#FFFFFF',
      color: '#000000DD',
    },
    borderRadius: theme.radius.normal,
    color: theme.triangle,
    composes: ['is-bold', 'py7', 'px12'],
    fontSize: '1.6rem',
    maxWidth: '65%',
    minWidth: '65%',
    transition: 'color 0.5s, background 0.2s',
    width: '65%',
  }),
  percentage: {
    maxWidth: '65%',
    minWidth: '65%',
    width: '65%',
  },
  title: {},
});

const InfosComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector(state => selectProject(state, id));
  const { overall } = useSelector(state => selectPercentages(state, id));

  const onTitleUpdate = useCallback(
    evt => {
      evt.preventDefault();
      const { value } = evt.target;
      const empty = !value || value.trim() === '';
      // NOTE doit renvoyer une info bulle d'erreur
      if (empty) return;
      dispatch(updateProjectName({ name: value, project: id }));
    },
    [dispatch, id]
  );

  return (
    <div className={classes.infos}>
      <div className={classes.title}>
        <input
          className={classes.input}
          defaultValue={project.name}
          type="text"
          onBlur={onTitleUpdate}
        />
      </div>
      <PercentageBar
        showPercent
        className={classes.percentage}
        count={overall.count}
        size="normal"
        total={overall.total}
      />
    </div>
  );
});

export default InfosComponent;
