import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { LANGS } from '../../../constants';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-columns', 'no-overflow'],
  },
  keys: {},
  wrapper: {
    composes: ['flex-columns'],
  },
});

const sortTranslationKeysAsc = (a, b) => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  return 0;
};

const selectTranslations = createSelector(
  state => state.datas,
  datas => {
    return datas.reduce((acc, { content, id }) => {
      const values = Object.entries(content)
        .sort(sortTranslationKeysAsc)
        .map(arr => arr[1]);
      const next = { [id]: { label: LANGS[id], values } };
      return { ...acc, ...next };
    }, {});
  }
);

const selectPrimaryKeys = createSelector(
  state => state.datas,
  datas => {
    const primary = datas.find(o => o.primary);
    const json = (primary && primary.content) || {};
    const keys = Object.keys(json).sort();
    return keys.sort();
  }
);

const EditComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const keys = useSelector(selectPrimaryKeys);
  const translations = useSelector(selectTranslations);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.keys}>
          <span>Primary Keys</span>
          {keys.map(val => (
            <div key={val}>
              <span>{val}</span>
            </div>
          ))}
        </div>
        {Object.entries(translations).map(([key, { label, values }]) => {
          return (
            <div key={key}>
              <span>{label}</span>
              <div>
                {values.map(v => (
                  <div key={v}>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

EditComponent.propTypes = {
  // json: React.PropTypes.oneOfType([
  //   React.PropTypes.bool,
  //   React.PropTypes.object,
  // ]).isRequired,
  // locales: React.PropTypes.oneOfType([
  //   React.PropTypes.bool,
  //   React.PropTypes.object,
  // ]).isRequired,
};

export default EditComponent;
