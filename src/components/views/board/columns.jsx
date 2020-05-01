import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import Input from './input';

const useStyles = createUseStyles({
  column: ({ theme }) => ({
    '& + &': {
      marginLeft: 12,
    },
    background: '#000000',
    borderRadius: 4,
    color: '#FFFFFF',
    composes: ['p7'],
    maxWidth: theme.sizes.colwidth,
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  container: {
    composes: ['is-scrollbox'],
  },
  item: {
    '& + &': {
      marginTop: 12,
    },
    composes: ['is-block', 'px7', 'py3', 'no-overflow'],
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  wrapper: {
    composes: ['flex-columns'],
  },
});

const ColumnsComponent = ({ items }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const primaryKeys = items[0].keys;
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.column}>
          {primaryKeys.map(key => (
            <Input key={key} lang="primary-key" value={key} />
          ))}
        </div>
        {items.map(({ keys, lang, values }) => (
          <div key={lang} className={classes.column}>
            {values.map((translation, index) => {
              const key = keys[index];
              return <Input key={key} lang={lang} value={translation} />;
            })}
          </div>
        ))}
        <div className={classes.column}>
          <Link to="/add">
            <span>Ajouter</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

ColumnsComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ColumnsComponent;
