import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectTranslations } from '../../../redux/selectors';
import withLayout from '../../layout';
import Keys from './columns/keys';
import Values from './columns/values';
import Options from './options';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows', 'is-relative'],
    height: 'auto',
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%',
  },
  table: {
    composes: ['flex-columns', 'flex-start'],
  },
});

const BoardViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const items = useSelector(selectTranslations);
  return (
    <div className={classes.container} id="board-view">
      <Options />
      <div className={classes.table}>
        <Keys />
        {items.map(obj => (
          <Values key={obj.lang} data={obj} />
        ))}
      </div>
    </div>
  );
};

export default withLayout(BoardViewComponent);
