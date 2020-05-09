import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { IoMdKey as KeyIcon } from 'react-icons/io';
import { createUseStyles, useTheme } from 'react-jss';

import LangHeader from './lang';

const useStyles = createUseStyles({
  header: ({ index, theme }) => ({
    background: '#F1F1F1',
    height: theme.sizes.colheader,
    position: 'sticky',
    top: 0,
    zIndex: theme.depths.colheader - index,
  }),
  primary: {
    background: '#F1F1F1',
    textAlign: 'center',
  },
  wrapper: {
    composes: ['fs14', 'px12', 'py18', 'is-bold', 'is-relative'],
    fontVariant: 'small-caps',
  },
});

const ColumnHeaderComponent = React.memo(({ index, label, lang, primary }) => {
  const theme = useTheme();
  const classes = useStyles({ index, theme });
  return (
    <div className={classnames(classes.header, { [classes.primary]: primary })}>
      <div className={classes.wrapper}>
        {primary && <KeyIcon />}
        {!primary && <LangHeader label={label} lang={lang} />}
      </div>
    </div>
  );
});

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
