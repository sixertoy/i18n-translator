import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import {
  AiOutlineExpandAlt as ExpandIcon,
  AiOutlineShrink as ShrinkIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { toggleCollapseLanguage } from '../../../../../redux/actions';

const useStyles = createUseStyles({
  collapse: {
    bottom: 7,
    color: '#000000',
    composes: ['is-absolute', 'no-background'],
    right: 12,
  },
});

const CollapseButtonComponent = React.memo(({ collapsed, lang, project }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const dispatch = useDispatch();
  const onToggleCollapse = useCallback(() => {
    dispatch(toggleCollapseLanguage({ lang, project }));
  }, [lang, project, dispatch]);

  return (
    <button
      className={classes.collapse}
      type="button"
      onClick={onToggleCollapse}>
      {collapsed && <ExpandIcon />}
      {!collapsed && <ShrinkIcon />}
    </button>
  );
});

CollapseButtonComponent.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
};

export default CollapseButtonComponent;
