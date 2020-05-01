import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectTranslations } from '../../../redux/selectors';
import Columns from './columns';
import Headers from './headers';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows'],
  },
  headers: {
    composes: ['flex-0'],
  },
  wrapper: {
    composes: ['is-relative', 'no-overflow', 'flex-1'],
  },
});

const BoardComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const translations = useSelector(selectTranslations);
  return (
    <div className={classes.container}>
      <div className={classes.headers}>
        <Headers items={translations} />
      </div>
      <div className={classes.wrapper}>
        <Columns items={translations} />
      </div>
    </div>
  );
};

export default BoardComponent;
