import React, { useCallback } from 'react';
import { AiOutlinePlus as PlusIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { createProjectAsync } from '../../../../redux/actions';
import Tooltip from '../../../commons/tooltip';
import Avatar from './avatar';
import Menu from './menu';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '& + &': { marginLeft: 4 },
    '&:hover': { background: 'hsla(0,0%,100%,.2)' },
    background: 'hsla(0,0%,100%,.3)',
    borderRadius: theme.radius.small,
    color: theme.colors.white,
    composes: ['is-block', 'fs16', 'is-bold', 'text-center', 'p7', 'mr7'],
    lineHeight: '1.25em',
    transition: 'background 0.5s',
    width: 'auto',
  }),
  container: {
    composes: ['no-flex'],
  },
  menu: ({ theme }) => ({
    borderRadius: theme.radius.small,
    padding: 8,
    width: 400,
  }),
  tooltip: ({ theme }) => ({
    borderRadius: theme.radius.small,
    padding: 8,
  }),
  wrapper: {
    composes: ['flex-columns', 'flex-start', 'items-center'],
  },
});

const AccountComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const canAddProject = !(pathname.indexOf('/import') === 0);

  const onCreateClick = useCallback(() => {
    dispatch(createProjectAsync()).then(id => {
      const url = `/import/${id}/step/1`;
      history.push(url);
    });
  }, [dispatch, history]);

  return (
    <div className={classes.container} id="header-account">
      <div className={classes.wrapper}>
        <button
          className={classes.button}
          disabled={!canAddProject}
          type="button"
          onClick={onCreateClick}>
          <PlusIcon />
        </button>
        <Tooltip
          className={classes.menu}
          component={<Menu />}
          placement="bottom-end">
          <div>
            <Avatar />
          </div>
        </Tooltip>
      </div>
    </div>
  );
});

export default AccountComponent;
