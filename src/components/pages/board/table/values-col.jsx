import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import ValueCell from './cells/value';
import Header from './header';
import useTableStyles from './use-table-styles';

const useStyles = createUseStyles({
  column: {
    marginLeft: 1,
  },
});

const sortByKeyAsc = (a, b) => {
  // NOTE les clés doivent être triées
  // dans le même ordre que dans le reducer 'keys'
  if (a[0] > b[0]) return 1;
  if (a[0] > b[0]) return -1;
  return 0;
};

const ValuesColumnComponent = React.memo(
  ({
    clearable,
    collapsed,
    depth,
    label,
    lang,
    percentage,
    project,
    translations,
  }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const tableClasses = useTableStyles({ primary: false, theme });
    const entries = Object.entries(translations).sort(sortByKeyAsc);

    return (
      <div className={classnames(classes.column, tableClasses.column)}>
        <Header
          clearable={clearable}
          collapsed={collapsed}
          depth={depth}
          label={label}
          lang={lang}
          percentage={percentage}
          project={project}
        />
        {entries.map(([key, value], index) => {
          const tabIndex = index + 1;
          const odd = Boolean(index % 2);
          return (
            <ValueCell
              key={key}
              id={key}
              lang={lang}
              odd={odd}
              project={project}
              tabIndex={tabIndex}
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
  depth: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  percentage: PropTypes.shape().isRequired,
  project: PropTypes.string.isRequired,
  translations: PropTypes.shape().isRequired,
};

export default ValuesColumnComponent;
