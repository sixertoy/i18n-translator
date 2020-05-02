import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectHeader } from '../../../redux/selectors';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-columns', 'px7'],
  },
  item: ({ theme }) => ({
    '& + &': {
      marginLeft: 12,
    },
    composes: ['px7', 'py12'],
    maxWidth: theme.sizes.colwidth,
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
});

const HeadersComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const headers = useSelector(selectHeader);
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <span>Primary Keys</span>
      </div>
      {headers.map(({ label, lang }) => (
        <div key={lang} className={classes.item}>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default HeadersComponent;
