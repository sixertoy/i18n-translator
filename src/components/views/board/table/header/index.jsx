import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import PercentageBar from '../../../../commons/percentage-bar';
import Tooltip from '../../../../commons/tooltip';
import CollapseButton from './collapse';
import Menu from './menu';

const useStyles = createUseStyles({
  button: {
    composes: ['is-absolute'],
    right: 12,
    top: 7,
  },
  header: ({ depth, theme }) => ({
    background: '#F1F1F1',
    height: theme.sizes.colheader,
    position: 'sticky',
    top: 0,
    zIndex: theme.depths.colheader - depth,
  }),
  percentage: {
    maxWidth: '65%',
    minWidth: '65%',
    width: '65%',
  },
  wrapper: {
    composes: ['fs14', 'px12', 'py18', 'is-bold', 'is-relative'],
    fontVariant: 'small-caps',
  },
});

const ColumnHeaderComponent = React.memo(
  ({ clearable, collapsed, depth, label, lang, percentage, project }) => {
    const theme = useTheme();
    const classes = useStyles({ depth, theme });
    const [visible, setVisible] = useState(false);

    // const show = () => setVisible(true);
    const hide = () => setVisible(false);
    console.log('visible', visible);

    const { count, total } = percentage;
    return (
      <div className={classnames(classes.header)}>
        <div className={classes.wrapper}>
          <div>{label}</div>
          <PercentageBar
            // NOTE do not mark 'className' as required
            // in PercentageBar
            className={classes.percentage}
            count={count}
            size="tiny"
            total={total}
          />
          <div className={classes.button}>
            <Tooltip
              component={
                <Menu
                  clearable={clearable}
                  lang={lang}
                  project={project}
                  onClick={hide}
                />
              }
              offset={[20, 5]}
              placement="bottom-end">
              <span>
                {/* <span onClick={visible ? hide : show}> */}
                <ContextIcon />
              </span>
            </Tooltip>
          </div>
          <CollapseButton collapsed={collapsed} lang={lang} project={project} />
        </div>
      </div>
    );
  }
);

ColumnHeaderComponent.propTypes = {
  clearable: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  depth: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  percentage: PropTypes.shape({
    count: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  project: PropTypes.string.isRequired,
};

export default ColumnHeaderComponent;
