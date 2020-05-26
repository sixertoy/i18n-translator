import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import {
  GoScreenFull as ExpandIcon,
  GoScreenNormal as ShrinkIcon,
} from 'react-icons/go';
import { MdDelete as DeleteIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { SwipeIcon } from '../../../../../assets/icons';
import { rgba } from '../../../../../core/utils';
import {
  clearLanguage,
  deleteLanguage,
  toggleCollapseLanguage,
} from '../../../../../redux/actions';

const useStyles = createUseStyles({
  button: {
    '&:hover': { background: rgba('#FFFFFF', 0.07) },
    background: 'transparent',
    borderRadius: 20,
    color: '#000000',
    composes: ['is-block', 'text-center', 'fs16'],
    height: 40,
    lineHeight: '40px',
    transition: 'background 0.5s',
    width: 40,
  },
  container: {
    // composes: ['flex-rows', 'flex-between', 'items-center', 'p7'],
    // width: 135,
  },
  danger: ({ theme }) => ({
    color: theme.colors.danger,
    composes: ['is-bold'],
  }),
  splitter: {
    background: '#909192',
    border: 0,
    composes: ['is-block'],
    height: 1,
    opacity: 0.15,
  },
  warning: ({ theme }) => ({
    color: theme.colors.warning,
  }),
});

const ContextMenuComponent = React.memo(
  ({ clearable, fullscreen, lang, project }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    const dispatch = useDispatch();
    const onClearLanguage = useCallback(() => {
      dispatch(clearLanguage({ lang, project }));
    }, [dispatch, lang, project]);

    const onDeleteLanguage = useCallback(() => {
      dispatch(deleteLanguage({ lang, project }));
    }, [dispatch, lang, project]);

    const onToggleCollapse = useCallback(() => {
      dispatch(toggleCollapseLanguage({ lang, project }));
    }, [dispatch, lang, project]);

    return (
      <div className={classes.container}>
        <button
          className={classes.button}
          type="button"
          onClick={onToggleCollapse}>
          {fullscreen && <ShrinkIcon />}
          {!fullscreen && <ExpandIcon />}
        </button>
        <button
          className={classnames(classes.button, classes.warning)}
          disabled={!clearable}
          type="button"
          onClick={onClearLanguage}>
          <SwipeIcon />
        </button>
        <button
          className={classnames(classes.button, classes.danger)}
          type="button"
          onClick={onDeleteLanguage}>
          <DeleteIcon />
        </button>
      </div>
    );
  }
);

ContextMenuComponent.propTypes = {
  clearable: PropTypes.bool.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
};

export default ContextMenuComponent;
