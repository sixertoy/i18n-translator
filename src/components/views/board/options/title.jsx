import React, { useCallback } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { rgba } from '../../../../core/utils';
import { updateProjectName } from '../../../../redux/actions';
import { selectPercentages, selectProject } from '../../../../redux/selectors';
import FavoriteButton from '../../../commons/buttons/favorite';
import PercentageBar from '../../../commons/percentage-bar';

const useStyles = createUseStyles({
  infos: {
    composes: ['flex-1'],
  },
  input: ({ theme }) => ({
    '&:focus': {
      background: rgba(theme.colors.white, 0.1),
      color: theme.colors.white,
      paddingLeft: 12,
    },
    borderRadius: theme.radius.normal,
    color: theme.colors.white,
    composes: ['is-bold', 'py7'],
    fontSize: '1.6rem',
    maxWidth: '65%',
    minWidth: '65%',
    transition: 'color 0.5s, background 0.2s, padding-left 0.5s',
    width: '65%',
  }),
  percentage: ({ theme }) => ({
    '& .progress-thumb': { background: theme.colors.grey },
    '& .progress-track': { background: rgba(theme.colors.white, 0.15) },
    maxWidth: '65%',
    minWidth: '65%',
    width: '65%',
  }),
  title: {},
});

const InfosComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector(state => selectProject(state, id));
  const { overall } = useSelector(state => selectPercentages(state, id));
  const { isFavorite, name } = project;

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
        <FavoriteButton id={id} isFavorite={isFavorite} />
        <input
          className={classes.input}
          defaultValue={name}
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
        useCount="percent"
      />
    </div>
  );
});

export default InfosComponent;
