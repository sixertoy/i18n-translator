import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectTranslations } from '../../../redux/selectors';
import withLayout from '../../layout';
import Keys from './keys';
import Options from './options';
import Values from './values';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows'],
    height: '100%',
    width: '100%',
  },
  table: {
    composes: ['flex-columns', 'flex-start'],
  },
});

const BoardViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const translations = useSelector(selectTranslations);
  return (
    <div className={classes.container} id="board-view">
      <Options />
      <div className={classes.table}>
        <Keys />
        {translations.map(obj => (
          <Values key={obj.lang} data={obj} />
        ))}
      </div>
    </div>
  );
};

export default withLayout(BoardViewComponent);
