import React from 'react';
import {
  AiOutlineSearch as SearchIcon,
  AiOutlineSortDescending as SortIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import { USE_SEARCH, USE_SORT } from '../../../../features.json';

const useStyles = createUseStyles({
  filter: {
    composes: ['fs24', 'ml12'],
  },
  icon: {
    height: '100%',
  },
  input: {
    composes: ['is-block', 'mr7'],
    height: '100%',
    width: '100%',
  },
  search: ({ theme }) => ({
    background: theme.colors.white,
    borderRadius: 16,
    composes: ['px12'],
    height: 32,
    maxWidth: 260,
    minWidth: 260,
    width: 260,
  }),
  tools: {
    composes: [],
  },
});

const ToolsComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.tools}>
      {USE_SEARCH && (
        <div className={classes.search}>
          <input
            className={classes.input}
            placeholder="Rechercher"
            type="text"
          />
          <SearchIcon className={classes.icon} />
        </div>
      )}
      {USE_SORT && (
        <button className={classes.filter} type="button" onClick={() => {}}>
          <SortIcon className={classes.icon} />
        </button>
      )}
    </div>
  );
};

export default ToolsComponent;
