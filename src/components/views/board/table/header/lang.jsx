import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

import { USE_LANGUAGE_CONTEXT_MENU } from '../../../../../features.json';
import PercentageBar from '../../../../commons/percentage-bar';
import Tooltip from '../../../../commons/tooltip';
import ContextMenu from './context-menu';

const useStyles = createUseStyles({
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
});

const LangHeaderComponent = ({ label, lang }) => {
  // TODO use clearable
  const classes = useStyles();
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
      {USE_LANGUAGE_CONTEXT_MENU && (
        <Tooltip
          component={<ContextMenu clearable={false} lang={lang} />}
          placement="bottom-end">
          <div className={classes.icon}>
            <ContextIcon />
          </div>
        </Tooltip>
      )}
    </React.Fragment>
  );
};

LangHeaderComponent.propTypes = {
  label: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default LangHeaderComponent;
