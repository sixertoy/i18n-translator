import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-columns'],
  },
  item: ({ theme }) => ({
    composes: ['px7', 'py12'],
    maxWidth: theme.sizes.colwidth,
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
});

const HeadersComponent = ({ items }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <span>Primary Keys</span>
      </div>
      {items.map(obj => (
        <div key={obj.id} className={classes.item}>
          <span>{obj.label}</span>
        </div>
      ))}
    </div>
  );
};

HeadersComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default HeadersComponent;
