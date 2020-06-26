import React, { useCallback, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { KEY_CODE_ENTER } from '../../../../constants';
import { rgba } from '../../../../core/utils';
import { updateProjectName } from '../../../../redux/actions';
import { selectPercentages, selectProject } from '../../../../redux/selectors';
import PercentageBar from '../../../commons/percentage-bar';

const useStyles = createUseStyles({
  infos: {
    composes: ['flex-1'],
  },
  input: {
    '&:focus': {
      background: rgba('#FFFFFF', 0.1),
      color: '#FFFFFF',
      paddingLeft: 12,
    },
    borderRadius: 3,
    color: '#FFFFFF',
    composes: ['is-bold', 'py7'],
    fontSize: '1.6rem',
    transition: 'color 0.5s, background 0.2s, padding-left 0.5s',
    width: '100%',
  },
  percentage: {
    '& .progress-thumb': {
      background: '#5D20D2',
    },
    '& .progress-track': {
      // background: rgba('#FFFFFF', 0.15)
      background: 'hsla(0, 0%, 100%, 0.06)',
    },
    maxWidth: '65%',
    minWidth: '65%',
    width: '65%',
  },
  title: {
    maxWidth: '60%',
    minWidth: '60%',
    width: '60%',
  },
});

const InfosComponent = React.memo(() => {
  const classes = useStyles();
  const [content, setContent] = useState('');

  const { id } = useParams();
  const project = useSelector(state => selectProject(state, id));
  const { overall } = useSelector(state => selectPercentages(state, id));
  const { name } = project;

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
        <input
          className={classes.input}
          type="text"
          value={content}
          onBlur={onInputBlur}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
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
