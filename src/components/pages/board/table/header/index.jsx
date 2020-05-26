import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import { px } from '../../../../../core/utils';
import PercentageBar from '../../../../commons/percentage-bar';
import Tooltip from '../../../../commons/tooltip';
import useTableStyles from '../styles';
import Menu from './menu';

const useStyles = createUseStyles({
  button: {
    '&:hover': { background: 'hsla(0, 0%, 100%, 0.1)' },
    background: 'hsla(0, 0%, 100%, 0.06)',
    borderRadius: '100%',
    composes: ['is-absolute', 'text-center', 'is-block', 'fs14', 'use-pointer'],
    height: 28,
    lineHeight: px(27),
    right: 12,
    top: 12,
    transition: 'background 0.3s',
    width: 28,
  },
  percentage: {
    '& .progress-thumb': {
      background: 'linear-gradient(90deg, #EE256B 0%, #FD7822 100%)',
    },
    '& .progress-track': { background: '#EAEAEA' },
    marginTop: 3,
    maxWidth: '65%',
    minWidth: '65%',
    width: '65%',
  },
  tooltip: {
    '& .tippy-content': { padding: 0 },
    borderRadius: 27,
    padding: 0,
  },
  wrapper: {
    composes: ['fs14', 'px12', 'py18', 'is-bold', 'is-relative'],
    fontVariant: 'small-caps',
  },
});

const ColumnHeaderComponent = React.memo(
  ({ clearable, depth, fullscreen, label, lang, percentage, project }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const tableClasses = useTableStyles({ depth, theme });

    const { count, total } = percentage;
    return (
      <div className={tableClasses.header}>
        <div className={classes.wrapper}>
          <div>{label}</div>
          <PercentageBar
            // NOTE do not mark 'className' as required
            // in PercentageBar
            className={classes.percentage}
            count={count}
            size="tiny"
            total={total}
            useCount={false}
          />
          <Tooltip
            useHover
            arrow={false}
            className={classes.tooltip}
            component={
              <Menu
                clearable={clearable}
                fullscreen={fullscreen}
                lang={lang}
                project={project}
              />
            }
            offset={[0, -30]}
            placement="bottom"
            theme="material">
            <span className={classes.button}>
              <ContextIcon />
            </span>
          </Tooltip>
        </div>
      </div>
    );
  }
);

ColumnHeaderComponent.propTypes = {
  clearable: PropTypes.bool.isRequired,
  depth: PropTypes.number.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  percentage: PropTypes.shape({
    count: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  project: PropTypes.string.isRequired,
};

export default ColumnHeaderComponent;
