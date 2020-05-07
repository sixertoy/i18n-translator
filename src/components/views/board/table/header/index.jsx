import Tippy from '@tippyjs/react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { IoMdKey as KeyIcon } from 'react-icons/io';
import { createUseStyles, useTheme } from 'react-jss';

import { USE_CONTEXT_LANG } from '../../../../../features.json';
import PercentageBar from '../../../../commons/percentage-bar';
import ContextMenuComponent from './context-menu';

const useStyles = createUseStyles({
  header: ({ index, theme }) => ({
    background: '#F1F1F1',
    height: theme.sizes.colheader,
    position: 'sticky',
    top: 0,
    zIndex: theme.depths.colheader - index,
  }),
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
  primary: {
    background: '#F1F1F1',
    textAlign: 'center',
  },
  tooltip: {
    borderLeft: '0 !important',
    borderRadius: '4px 0 4px 4px !important',
    borderRight: '0 !important',
    borderTop: '0 !important',
    left: '0 !important',
  },
  wrapper: {
    composes: ['fs14', 'px12', 'py18', 'is-bold', 'is-relative'],
    fontVariant: 'small-caps',
  },
});

const ColumnHeaderComponent = ({ clearable, index, label, lang, primary }) => {
  // TODO clearable doit passer par un custom hook
  // plutot que de passer par les props
  const theme = useTheme();
  const classes = useStyles({ index, theme });
  return (
    <div className={classnames(classes.header, { [classes.primary]: primary })}>
      <div className={classes.wrapper}>
        {primary && <KeyIcon />}
        {!primary && (
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
            {USE_CONTEXT_LANG && (
              <Tippy
                hideOnClick
                interactive
                className={classes.tooltip}
                content={
                  <ContextMenuComponent clearable={clearable} lang={lang} />
                }
                placement="bottom"
                trigger="click"
                zIndex={999999999}>
                <div className={classes.icon}>
                  <ContextIcon />
                </div>
              </Tippy>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

ColumnHeaderComponent.defaultProps = {
  clearable: false,
  label: null,
  lang: null,
  primary: false,
};

ColumnHeaderComponent.propTypes = {
  clearable: PropTypes.bool,
  index: PropTypes.number.isRequired,
  label: PropTypes.string,
  lang: PropTypes.string,
  primary: PropTypes.bool,
};

export default ColumnHeaderComponent;
