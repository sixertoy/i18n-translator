import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  column: ({ theme }) => ({
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
          {primaryKeys.map(id => (
            <div key={id} className={classes.item}>
              <span>{id}</span>
            </div>
          ))}
        </div>
        {items.map(({ id, values }) => (
          <div key={id} className={classes.column}>
            {values.map(v => (
              <div key={v} className={classes.item}>
                <span>{v}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

ColumnsComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ColumnsComponent;
