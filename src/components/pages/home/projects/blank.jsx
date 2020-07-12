import React, { useCallback } from 'react';
import { FiPlus as PlusIcon } from 'react-icons/fi';
import { createUseStyles } from 'react-jss';
import { useHistory } from 'react-router-dom';

const useStyles = createUseStyles({
  button: {
    '&:hover': {
      color: '#301D6B',
      textDecoration: 'none',
    },
    background: '#FFF',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px !important',
    color: '#3b1d98',
    composes: ['text-center', 'is-block', 'rnd7'],
    fontSize: '3em',
    height: '100%',
    transition: 'color 0.3s',
    width: '100%',
  },
  icon: {
    marginLeft: 5,
  },
  item: {
    composes: ['is-relative', 'flex-1'],
    height: '8rem',
    margin: '0 1% 1% 0',
    maxWidth: '49%',
    minWidth: '49%',
    width: '49%',
  },
  [`@media (min-width: ${861}px)`]: {
    item: {
      maxWidth: '32%',
      minWidth: '32%',
      width: '32%',
    },
  },
});

const BlankComponent = React.memo(() => {
  const history = useHistory();
  const classes = useStyles();

  const onCreateClick = useCallback(() => {
    history.push(`/import`);
  }, [history]);

  return (
    <div className={classes.item}>
      <button className={classes.button} type="button" onClick={onCreateClick}>
        <PlusIcon className={classes.icon} />
      </button>
    </div>
  );
});

export default BlankComponent;
