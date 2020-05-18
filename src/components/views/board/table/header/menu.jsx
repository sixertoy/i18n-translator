import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import {
  AiOutlineClear as SwipeIcon,
  AiOutlineCopy as CloneIcon,
  AiOutlineFullscreen as ExpandIcon,
  AiOutlineShrink as ShrinkIcon,
} from 'react-icons/ai';
import { MdDelete as DeleteIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { rgba } from '../../../../../core/utils';
import {
  clearLanguage,
  deleteLanguage,
  toggleCollapseLanguage,
} from '../../../../../redux/actions';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '&:hover': { background: rgba(theme.colors.white, 0.07) },
    background: 'transparent',
    borderRadius: 20,
    color: theme.colors.black,
    composes: ['is-block', 'text-center', 'fs16'],
    height: 40,
    lineHeight: '40px',
    transition: 'background 0.5s',
    width: 40,
  }),
  container: {
    composes: ['flex-columns', 'flex-between', 'items-center', 'p7'],
    width: 175,
  },
  danger: ({ theme }) => ({
    color: theme.colors.danger,
    composes: ['is-bold'],
  }),
  splitter: ({ theme }) => ({
    background: theme.colors.white,
    border: 0,
    composes: ['is-block'],
    height: 1,
    opacity: 0.15,
  }),
  warning: ({ theme }) => ({
    color: theme.colors.warning,
  }),
});

const ContextMenuComponent = React.memo(
  ({ clearable, collapsed, lang, onClick, project }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    const dispatch = useDispatch();
    const onCloneLanguage = useCallback(() => {
      // dispatch(cloneLanguage(lang));
    }, []);

    const onClearLanguage = useCallback(() => {
      onClick();
      dispatch(clearLanguage({ lang, project }));
    }, [onClick, dispatch, lang, project]);

    const onDeleteLanguage = useCallback(() => {
      onClick();
      dispatch(deleteLanguage({ lang, project }));
    }, [onClick, dispatch, lang, project]);

    const onToggleCollapse = useCallback(() => {
      dispatch(toggleCollapseLanguage({ lang, project }));
    }, [lang, project, dispatch]);

    return (
      <div className={classes.container}>
        <button
          className={classnames(classes.button, classes.danger)}
          type="button"
          onClick={onDeleteLanguage}>
          <DeleteIcon />
        </button>
        <button
          className={classnames(classes.button, classes.warning)}
          disabled={!clearable}
          type="button"
          onClick={onClearLanguage}>
          <SwipeIcon />
        </button>
        <button
          className={classes.button}
          type="button"
          onClick={onCloneLanguage}>
          <CloneIcon />
        </button>
        <button
          className={classes.button}
          type="button"
          onClick={onToggleCollapse}>
          {collapsed && <ExpandIcon />}
          {!collapsed && <ShrinkIcon />}
        </button>
      </div>
    );
  }
);

ContextMenuComponent.propTypes = {
  clearable: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  project: PropTypes.string.isRequired,
};

export default ContextMenuComponent;
