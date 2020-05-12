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

import {
  clearLanguage,
  deleteLanguage,
  toggleCollapseLanguage,
} from '../../../../../redux/actions';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    borderRadius: 0,
    color: theme.colors.black,
    composes: ['is-block', 'no-background', 'text-center', 'fs16'],
    height: 40,
    lineHeight: '40px',
    width: 40,
  }),
  container: {
    composes: ['flex-columns', 'flex-end', 'items-center'],
    width: 175,
  },
  danger: ({ theme }) => ({
    color: theme.colors.danger,
    composes: ['is-bold'],
  }),
  icon: {
    composes: ['mr7'],
  },
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
          {/* <span>Remove language</span> */}
          <DeleteIcon className={classes.icon} />
        </button>
        {/* <hr className={classes.splitter} /> */}
        <button
          className={classnames(classes.button, classes.warning)}
          disabled={!clearable}
          type="button"
          onClick={onClearLanguage}>
          {/* <span>Clear language</span> */}
          <SwipeIcon className={classes.icon} />
        </button>
        {/* <hr className={classes.splitter} /> */}
        <button
          className={classes.button}
          type="button"
          onClick={onCloneLanguage}>
          {/* <span>Clone language</span> */}
          <CloneIcon className={classes.icon} />
        </button>
        <button
          className={classes.button}
          type="button"
          onClick={onToggleCollapse}>
          {collapsed && <ExpandIcon className={classes.icon} />}
          {!collapsed && <ShrinkIcon className={classes.icon} />}
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
