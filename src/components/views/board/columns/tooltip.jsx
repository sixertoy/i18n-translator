import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';

import {
  clearLanguage,
  removeLanguage,
} from '../../../../redux/actions/translations';
import ContextMenuComponent from './context-menu';

const useStyles = createUseStyles({
  tooltip: {
    borderLeft: '0 !important',
    borderRadius: '4px 0 4px 4px !important',
    borderRight: '0 !important',
    borderTop: '0 !important',
    left: '0 !important',
  },
});

const TooltipComponent = ({ lang }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClearHandler = useCallback(() => {
    dispatch(clearLanguage(lang));
  }, [dispatch, lang]);

  const onRemoveHandler = useCallback(() => {
    dispatch(removeLanguage(lang));
  }, [dispatch, lang]);

  return (
    <Tippy
      hideOnClick
      interactive
      className={classes.tooltip}
      content={
        <ContextMenuComponent
          onClear={onClearHandler}
          onRemove={onRemoveHandler}
        />
      }
      placement="bottom"
      theme="light-border"
      trigger="click">
      <div>
        <ContextIcon />
      </div>
    </Tippy>
  );
};

TooltipComponent.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default TooltipComponent;
