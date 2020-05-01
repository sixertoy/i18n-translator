import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import {
  selectTranslations,
  selectTranslationsPrimaryKeys,
} from '../../../redux/selectors';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-columns', 'no-overflow'],
  },
  keys: {},
  wrapper: {
    composes: ['flex-columns'],
  },
});

const BoardComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const keys = useSelector(selectTranslationsPrimaryKeys);
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

export default BoardComponent;
