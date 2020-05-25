import React, { useCallback, useEffect, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { KEY_CODE_ENTER } from '../../../../constants';
import { rgba } from '../../../../core/utils';
import { updateProjectName } from '../../../../redux/actions';
import { selectPercentages, selectProject } from '../../../../redux/selectors';
import FavoriteButton from '../../../commons/buttons/favorite';
import PercentageBar from '../../../commons/percentage-bar';

const useStyles = createUseStyles({
  favorite: {
    '&:hover': { background: 'hsla(0, 0%, 100%, 0.1)' },
    background: 'hsla(0, 0%, 100%, 0.06)',
    composes: ['mr7'],
  },
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
    transition: 'color 0.5s, background 0.2s, padding-left 0.5s',
    width: '100%',
  }),
  percentage: ({ theme }) => ({
    '& .progress-thumb': {
      background: '#362760',
    },
    '& .progress-track': { background: rgba(theme.colors.white, 0.15) },
    maxWidth: '65%',
    minWidth: '65%',
    width: '65%',
  }),
  title: {
    composes: ['flex-columns', 'flex-start', 'items-center'],
  },
  wrapper: {
    display: 'inline-block',
    width: 'auto',
  },
});

const InfosComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [content, setContent] = useState('');

  const { id } = useParams();
  const project = useSelector(state => selectProject(state, id));
  const { overall } = useSelector(state => selectPercentages(state, id));
  const { isFavorite, name } = project;

  const dispatch = useDispatch();
  const onInputBlur = useCallback(
    evt => {
      evt.preventDefault();
      const update = evt.target.value;
      const empty = !update || update.trim() === '';
      // NOTE doit renvoyer une info bulle d'erreur
      if (empty) return;
      dispatch(updateProjectName({ name: update, project: id }));
    },
    [dispatch, id]
  );

  const onKeyDown = useCallback(
    evt => {
      const code = evt.keyCode;
      const isEnterKey = code === KEY_CODE_ENTER;
      if (!isEnterKey) return;
      const update = evt.target.value;
      const empty = !update || update.trim() === '';
      // NOTE doit renvoyer une info bulle d'erreur
      if (empty) return;
      dispatch(updateProjectName({ name: update, project: id }));
    },
    [dispatch, id]
  );

  const onInputChange = useCallback(evt => {
    evt.preventDefault();
    const update = evt.target.value;
    setContent(update);
  }, []);

  useEffect(() => {
    setContent(name);
  }, [name]);

  return (
    <div className={classes.infos}>
      <div className={classes.title}>
        <FavoriteButton
          className={classes.favorite}
          id={id}
          isFavorite={isFavorite}
        />
        <div className={classes.wrapper}>
          <input
            className={classes.input}
            type="text"
            value={content}
            onBlur={onInputBlur}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
          />
        </div>
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
