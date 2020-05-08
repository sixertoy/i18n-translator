import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import {
  AiOutlineEllipsis as ContextIcon,
  AiOutlineShrink as CollapseIcon,
} from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';

import { collapseLanguage } from '../../../../../redux/actions';
import PercentageBar from '../../../../commons/percentage-bar';
import Tooltip from '../../../../commons/tooltip';
import ContextMenu from './context-menu';

const useStyles = createUseStyles({
  collapse: {
    bottom: 7,
    color: '#000000',
    composes: ['is-absolute', 'no-background'],
    right: 12,
  },
  context: {
    composes: ['is-absolute'],
    right: 12,
    top: 7,
  },
  percentage: {
    maxWidth: '65%',
    minWidth: '65%',
    width: '65%',
  },
});

const LangHeaderComponent = React.memo(({ collapsed, label, lang }) => {
  // TODO use clearable
  const classes = useStyles();
  const dispatch = useDispatch();

  const onToggleCollapse = useCallback(() => {
    const next = !collapsed;
    dispatch(collapseLanguage(next));
  }, [collapsed, dispatch]);

  return (
    <React.Fragment>
      <div>{label}</div>
      <PercentageBar
        // NOTE do not mark 'className' as required
        // in PercentageBar
        className={classes.percentage}
        count={30}
        size="tiny"
        total={40}
      />
      <Tooltip
        component={<ContextMenu clearable={false} lang={lang} />}
        placement="bottom-end">
        <div className={classes.context}>
          <ContextIcon />
        </div>
      </Tooltip>
      <button
        className={classes.collapse}
        type="button"
        onClick={onToggleCollapse}>
        <CollapseIcon />
      </button>
    </React.Fragment>
  );
});

LangHeaderComponent.defaultProps = {
  collapsed: false,
};

LangHeaderComponent.propTypes = {
  collapsed: PropTypes.bool,
  label: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default LangHeaderComponent;
