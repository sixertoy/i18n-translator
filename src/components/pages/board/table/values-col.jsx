import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import ValueCell from './cells/value';
import Header from './header';
import useTableStyles from './styles';

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

const valuesToPairs = translations =>
  Object.entries(translations).sort(sortByKeyAsc);

const ValuesColumnComponent = React.memo(
  ({
    clearable,
    depth,
    fullscreen,
    hidden,
    label,
    lang,
    percentage,
    project,
    translations,
  }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const tableClasses = useTableStyles({ primary: false, theme });
    const pairs = valuesToPairs(translations);

    return (
      <div
        className={classnames(classes.column, tableClasses.column, {
          fullscreen,
          hidden,
        })}>
        <Header
          clearable={clearable}
          depth={depth}
          fullscreen={fullscreen}
          label={label}
          lang={lang}
          percentage={percentage}
          project={project}
        />
        {pairs.map(([key, value], index) => {
          const tabIndex = index + 1;
          const odd = Boolean(index % 2);
          const uniqkey = `${project}::value::${key}`;
          return (
            <ValueCell
              key={uniqkey}
              id={key}
              lang={lang}
              odd={odd}
              project={project}
              tabIndex={hidden ? -1 : tabIndex}
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
  depth: PropTypes.number.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  hidden: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  percentage: PropTypes.shape().isRequired,
  project: PropTypes.string.isRequired,
  translations: PropTypes.shape().isRequired,
};

export default ValuesColumnComponent;
