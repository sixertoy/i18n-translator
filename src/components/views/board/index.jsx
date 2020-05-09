import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectLanguages } from '../../../redux/selectors';
import withLayout from '../../layout';
import Options from './options';
import Table from './table';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows', 'is-relative', 'is-full-layout'],
  },
  wrapper: {
    composes: ['is-relative', 'flex-1'],
    height: 'auto',
    overflow: 'auto',
    width: '100%',
  },
});

const BoardViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { id } = useParams();

  const languages = useSelector(state => selectLanguages(state, id));
  const hasNoLanguages = !languages || !languages.length;

  return (
    <div className={classes.container} id="board-view">
      <Options />
      <div className={classes.wrapper}>
        {!hasNoLanguages && <Table languages={languages} />}
        {hasNoLanguages && <span>Ajouter une langue</span>}
      </div>
    </div>
  );
});

export default withLayout(BoardViewComponent);
