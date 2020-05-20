import classnames from 'classnames';
import isEmpty from 'lodash.isempty';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Item from './item';

const useStyles = createUseStyles({
  list: {
    marginBottom: 24,
  },
  reversed: {
    flexDirection: 'row-reverse',
  },
  title: {
    marginBottom: 24,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});

const ListComponent = React.memo(({ icon: Icon, items, label }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.list}>
      <h3 className={classes.title}>
        <Icon />
        <span>{label}</span>
      </h3>
      <ul className={classnames(classes.wrapper)}>
        {isEmpty(items) && <span>Aucun projet</span>}
        {items.map(obj => (
          <Item key={obj.id} data={obj} />
        ))}
      </ul>
    </div>
  );
});

ListComponent.propTypes = {
  icon: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  label: PropTypes.string.isRequired,
};

export default ListComponent;
