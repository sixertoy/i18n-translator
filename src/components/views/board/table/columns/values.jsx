import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import ValueCell from '../cells/value';
import Header from '../header';

const useStyles = createUseStyles({
  column: ({ theme }) => ({
    marginLeft: 1,
    maxWidth: '65%',
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
});

const ValuesColumnComponent = React.memo(
  ({
    clearable,
    collapsed,
    label,
    lang,
    percentage,
    project,
    translations,
  }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const entries = Object.entries(translations);
    return (
      <div className={classes.column}>
        <Header
          clearable={clearable}
          collapsed={collapsed}
          label={label}
          lang={lang}
          percentage={percentage}
          project={project}
        />
        {entries.map(([key, value], ind) => {
          const odd = Boolean(ind % 2);
          return (
            <ValueCell
              key={key}
              id={key}
              lang={lang}
              odd={odd}
              project={project}
              value={value}
            />
          );
        })}
      </div>
    );
  }
);

ValuesColumnComponent.propTypes = {
  clearable: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  percentage: PropTypes.shape().isRequired,
  project: PropTypes.string.isRequired,
  translations: PropTypes.shape().isRequired,
};

export default ValuesColumnComponent;
