import classnames from 'classnames';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectFullscreen } from '../../../../redux/selectors';
import ValueCell from './cells/value';
import Header from './header';
import useTableStyles from './styles';

const useStyles = createUseStyles({
  column: { marginLeft: 3 },
});

const sortByKeyAsc = (a, b) => {
  // NOTE les clés doivent être triées
  // dans le même ordre que dans le reducer 'keys'
  if (a > b) return 1;
  if (a > b) return -1;
  return 0;
};

const ValuesColumnComponent = React.memo(({ depth, item, percentage }) => {
  const { clearable, fullscreen, label, lang, project, translations } = item;
  const theme = useTheme();
  const classes = useStyles({ theme });
  const tableClasses = useTableStyles({ primary: false, theme });
  const useFullscreen = useSelector(state => selectFullscreen(state, project));

  const hidden = useFullscreen && !fullscreen;
  const expanded = useFullscreen && fullscreen;

  return (
    <div
      className={classnames(classes.column, tableClasses.column, {
        expanded,
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
      {Object.keys(translations)
        .sort(sortByKeyAsc)
        .map((key, index) => {
          const tabIndex = index + 1;
          const odd = Boolean(index % 2);
          const value = get(translations, key);
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
});

ValuesColumnComponent.propTypes = {
  depth: PropTypes.number.isRequired,
  item: PropTypes.shape({
    clearable: PropTypes.bool,
    fullscreen: PropTypes.bool,
    label: PropTypes.string,
    lang: PropTypes.string,
    project: PropTypes.string,
    translations: PropTypes.shape(),
  }).isRequired,
  percentage: PropTypes.shape().isRequired,
};

export default ValuesColumnComponent;
