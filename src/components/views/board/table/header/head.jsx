import get from 'lodash.get';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import {
  AiOutlineEllipsis as ContextIcon,
  AiOutlineExpandAlt as ExpandIcon,
  AiOutlineShrink as ShrinkIcon,
} from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { toggleCollapseLanguage } from '../../../../../redux/actions';
import { selectPercentages } from '../../../../../redux/selectors';
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

  const { id } = useParams();
  const percentages = useSelector(state => selectPercentages(state, id));
  const { count, total } = get(percentages, lang);

  const onToggleCollapse = useCallback(() => {
    dispatch(toggleCollapseLanguage({ id, lang }));
  }, [id, lang, dispatch]);

  return (
    <React.Fragment>
      <div>{label}</div>
      <PercentageBar
        // NOTE do not mark 'className' as required
        // in PercentageBar
        className={classes.percentage}
        count={count}
        size="tiny"
        total={total}
      />
      <div className={classes.context}>
        <Tooltip
          component={<ContextMenu clearable lang={lang} />}
          placement="bottom-end">
          <span>
            <ContextIcon />
          </span>
        </Tooltip>
      </div>
      <button
        className={classes.collapse}
        type="button"
        onClick={onToggleCollapse}>
        {collapsed && <ExpandIcon />}
        {!collapsed && <ShrinkIcon />}
      </button>
    </React.Fragment>
  );
});

LangHeaderComponent.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default LangHeaderComponent;
