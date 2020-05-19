import React, { useCallback } from 'react';
import { AiOutlinePlus as PlusIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { px } from '../../../core/utils';
import { createProjectAsync } from '../../../redux/actions';
import Tooltip from '../../commons/tooltip';

const useStyles = createUseStyles({
  bigbutton: {
    bottom: 24,
    composes: ['is-absolute'],
    right: 24,
  },
  button: ({ theme }) => ({
    background: theme.colors.black,
    borderRadius: 28,
    color: theme.colors.white,
    composes: ['text-center'],
    fontSize: '2.2rem',
    height: 56,
    lineHeight: px(51),
    pointer: 'cursor',
    width: 56,
  }),
  icon: {},
});

const BigButton = React.memo(() => {
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });

  const onAddProject = useCallback(() => {
    dispatch(createProjectAsync()).then(id => {
      const url = `/import/${id}/step/1`;
      history.push(url);
    });
  }, [dispatch, history]);

  return (
    <div className={classes.bigbutton}>
      <Tooltip
        useHover
        interactive={false}
        placement="top-end"
        theme="light"
        title="Ajouter un projet">
        <button className={classes.button} type="button" onClick={onAddProject}>
          <PlusIcon className={classes.icon} />
        </button>
      </Tooltip>
    </div>
  );
});

export default BigButton;
