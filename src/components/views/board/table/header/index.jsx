import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import { USE_CONTEXT_LANG } from '../../../../../features.json';
import PercentageBar from '../../../../commons/percentage-bar';
import ContextMenuComponent from './context-menu';

const useStyles = createUseStyles({
  header: {
    background: '#F1F1F1',
    composes: ['fs14', 'px12', 'py18', 'is-bold', 'is-relative'],
    fontVariant: 'small-caps',
  },
  icon: {
    composes: ['is-absolute'],
    right: 12,
    top: 12,
  },
  percentage: {
    maxWidth: '65%',
    minWidth: '65%',
    width: '65%',
  },
  tooltip: {
    borderLeft: '0 !important',
    borderRadius: '4px 0 4px 4px !important',
    borderRight: '0 !important',
    borderTop: '0 !important',
    left: '0 !important',
  },
});

const ColumnHeaderComponent = ({ label, lang }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.header}>
      <div>{label}</div>
      <PercentageBar
        // NOTE do not mark 'className' as required
        // in PercentageBar
        className={classes.percentage}
        count={30}
        size="tiny"
        total={40}
      />
      {USE_CONTEXT_LANG && (
        <Tippy
          hideOnClick
          interactive
          className={classes.tooltip}
          content={<ContextMenuComponent lang={lang} />}
          placement="bottom"
          theme="light-border"
          trigger="click">
          <div className={classes.icon}>
            <ContextIcon />
          </div>
        </Tippy>
      )}
    </div>
  );
};

ColumnHeaderComponent.defaultProps = {
  label: null,
  lang: null,
};

ColumnHeaderComponent.propTypes = {
  label: PropTypes.string,
  lang: PropTypes.string,
};

export default ColumnHeaderComponent;
